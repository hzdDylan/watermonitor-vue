const Router = require('koa-router')

// 导入用户路由控制
const { register, login } = require('../controller/user.controller')

// 导入用户中间件
const {registerValidator, loginValidator} = require('../middleware/user.middleware')
// 导入认证中间件
const {authValidator} = require('../middleware/auth.middle')

// 用户路由


const router = new Router({prefix: '/users'});
 
// router.get('/', (ctx, next) => {
//     ctx.body = "hello user"
// })

// 注册接口
// 注册
router.post('/register', registerValidator, register);
// 登录
router.post('/login', loginValidator, login);
// 修改密码
router.patch('/pwd', authValidator, (ctx, next) => {
    ctx.body = "认证成功"
})

module.exports = router;
