const func = require('../../utils/mysql.ts');
const check = require('../../utils/check.ts')
module.exports = {
    getAll(params: any) {
        const userId: number = parseInt(check.user(params.token))
        if (!userId) { return }
        return new Promise((resolve) => {
            const query = ``
            // func.connPool(query, [], (rows: any) => {
            //     resolve(rows)
            // });
        })
    }
}

export { }
