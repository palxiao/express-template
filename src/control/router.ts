const rExpress = require('express');
const test = require('../service/test.ts');
const api = require('./api.ts');

const rRouter = rExpress.Router();

rRouter.get(api.TEST, test.eg);

module.exports = rRouter;

export default rRouter;
