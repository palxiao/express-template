const rExpress = require('express');
const user = require('../service/user.ts');
const api = require('./api.ts');

const rRouter = rExpress.Router();

rRouter.post(api.userAdd, user.addOne); // 注册用户
rRouter.get(api.userLogin, user.login); // 用户登录

module.exports = rRouter;

export default rRouter;
