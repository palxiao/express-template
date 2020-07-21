const DemoQL = require('./model.ts')
const service = require('./resolver.ts');
class Demo {
    constructor() {

    }
    static Query: any = {
        /**
        * @api {get} Test GraphQL Demo
        * @apiName  Test
        * @apiVersion 1.0.0
        * @apiGroup _gql
        * @apiSampleRequest off
        * 
        * @apiParam {String} token 用户验签
        * 
        * @apiSuccess {Object} data 
        * @apiSuccess {Array} data.xxxx 返回结果
        * 
        * @apiUse DemoGetModel
        */
        getDemo(parent: any, { params }: any, context: any) {
            return service.getAll(params)
        }
    }
}

module.exports = {
    Demo, DemoQL
}
export {
    Demo, DemoQL
}

