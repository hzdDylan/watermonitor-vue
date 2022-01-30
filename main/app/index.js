const Koa = require('koa')
const koaBody = require('koa-body')

// 导入路由
const homeRouter = require('../routes/homeRouter')
const userRouter = require('../routes/userRouter')

// 创建实例
const app = new Koa();

// 注册koa-body
app.use(koaBody());
// 注册路由
app.use(homeRouter.routes());
app.use(userRouter.routes());

// 错误处理
app.on('error', (e, ctx) => {
    console.error("server error", e)
})

module.exports = app