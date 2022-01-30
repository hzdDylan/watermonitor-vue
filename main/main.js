const Koa = require('koa')

// 导入端口配置
const { APP_PORT } = require('./config/config.default')

// 导入app
const app = require('./app')

app.listen(APP_PORT, () => {
    console.log('server is running on localhost:'+APP_PORT)
})