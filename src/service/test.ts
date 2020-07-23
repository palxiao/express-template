const sql = require('../utils/widget/sql.ts')
const func = require('../utils/mysql.ts')
const $utils = require('../utils/index.ts')

module.exports = {

    eg(req: any, res: any) {
        /**
        * @api {get} api/--- 示例
        * @apiVersion 1.0.0
        * @apiGroup test
        * 
        * @apiParam {String} none none
        */
        
        // func.connPool('SELECT * from user where user_name = ?', [name], (rows: any) => {
            res.json({ code: 200, msg: '示例测试接口' })
        // })
    },

}

export { }
