const Router = require('koa-router')

// 定义方法
const {upload, pointCreate, pointUpdate, getPointsInfo} = require('../controller/water.controller.js')
// 定义水质数据校验中间件
const {waterPointValidator} = require('../middleware/water.middleware.js')
// 定义用户验证中间件
const {authValidator, hasWaterDataPermission} = require('../middleware/auth.middle')

// 定义路由
const router = new Router({ prefix: '/waterdata'});

// 文件上传接口
router.post('/upload', authValidator, hasWaterDataPermission, upload);

// 站点发布接口
router.post('/pointCreate', authValidator, hasWaterDataPermission, waterPointValidator, pointCreate)

// 站点修改接口
router.put('/pointUpdate', authValidator, hasWaterDataPermission, waterPointValidator, pointUpdate)

// 站点获取接口
router.get('/', getPointsInfo)

module.exports = router