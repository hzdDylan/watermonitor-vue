const path = require('path')

// 导入koa相关
const Koa = require('koa')
const koaBody = require('koa-body')
const KoaStatic = require('koa-static')

// 导入路由
const router = require('../routes')

// 创建实例
const app = new Koa();

// 注册koa-body
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, '../upload/img'),
        keepExtensions: true 
    }
}));
// 注册静态资源路径
app.use(KoaStatic(path.join(__dirname, '../upload')));
// 注册路由
app.use(router.routes()).use(router.allowedMethods());

// 错误处理
app.on('error', (e, ctx) => {
    console.error("server error", e)
})

module.exports = app