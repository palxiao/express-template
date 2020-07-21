/**
* @apiDefine DemoGetModel
* @apiParam (可选返回参数) {Number} id ID
* @apiParam (可选返回参数) {String} field 字段
*/
module.exports = `
type Demo{
    id: Int,
    field: String
}

input demoParams {
    token: String,
}
`