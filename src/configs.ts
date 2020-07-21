/**
 *   0 本地数据库   1 线上数据库
 */

const switchOne: number = 0

const dbs = [
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'frog_punch'
    }
]

exports.db = dbs[switchOne]