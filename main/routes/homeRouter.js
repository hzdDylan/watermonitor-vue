const Router = require('koa-router')

// 主页路由
const router = new Router();


router.get('/', (ctx, next) => {
    ctx.body = "hello home"
})

module.exports = router;
