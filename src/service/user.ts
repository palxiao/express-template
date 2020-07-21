const sql = require('../utils/widget/sql.ts')
const moment = require('moment')
const bcrypt = require('bcryptjs')
const func = require('../utils/mysql.ts')
const $utils = require('../utils/index.ts')

function formatData(rows: any) {
    return rows.map((row: any) => {
        const date = moment(row.create_time).format('YYYY-MM-DD')
        const obj = {}
        delete row.password
        return Object.assign({}, row, { create_time: date }, obj)
    })
}

module.exports = {

    fetchAll(req: any, res: any) {
        func.connPool(sql.queryAll, 'user', (rows: any) => {
            rows = formatData(rows)
            res.json({ code: 200, msg: 'ok', users: rows })
        })
    },

    addOne(req: any, res: any) {
        /**
        * @api {post} api/user/add 注册 - 账号密码
        * @apiVersion 1.0.0
        * @apiGroup user
        * 
        * @apiParam {String} name 用户名，唯一值
        * @apiParam {String} pass 用户密码
        */
        const name = req.body.name
        let pass = req.body.pass
        const query = 'INSERT INTO user(user_name, password) VALUES(?, ?)'

        func.connPool('SELECT * from user where user_name = ?', [name], (rows: any) => {
            if (!rows.length) { // 用户不存在
                bcrypt.hash(pass, 10, (err: any, hash: any) => {
                    if (err) console.log(err)

                    pass = hash

                    const arr = [name, pass]

                    func.connPool(query, arr, (rows: any) => {
                        res.json({ code: 200, msg: '注册成功' })
                    })
                })
            } else {
                res.json({ code: 201, msg: '用户已存在' })
            }
        })
    },

    login(req: any, res: any) {
        /**
        * @api {post} api/user/login 登陆 - 账号密码
        * @apiVersion 1.0.0
        * @apiGroup user
        * 
        * @apiParam {String} user_name 用户名
        * @apiParam {String} pass 密码
        * 
        * @apiSuccess (result) {String} token 用户token
        */
        const user_name = req.body.user_name
        const pass = req.body.pass

        func.connPool('SELECT * from user where user_name = ?', [user_name], (rows: any) => {
            if (!rows.length) {
                res.json({ code: 400, msg: '用户名不存在' })
                return
            }

            const password = rows[0].password
            bcrypt.compare(pass, password, (err: any, sure: any) => {
                if (err) {
                    console.log(err)
                }
                if (sure) {

                    const user = {
                        user_id: rows[0].id,
                        user_name: rows[0].user_name,
                        token: $utils.getToken(rows[0].id)
                    }

                    // req.session.login = user

                    res.json({ code: 200, msg: '登录成功', result: user })
                } else {
                    res.json({ code: 400, msg: '密码错误' })
                }
            })
        })
    },
}

export { }
