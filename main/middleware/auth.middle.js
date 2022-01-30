// 导入jwt
const jwt = require('jsonwebtoken')
// 导入秘钥
const {JWT_SECRET} = require('../config/config.default')
// 导入错误常量
const {tokenExpiredError, invalidTokenError} = require('../constant/errortype')

// authorize
const authValidator = async (ctx, next) => {
    const {authorization} = ctx.request.header;
    // 此处Bearer后面要个空格
    const token = authorization.replace("Bearer ", '')

    try {
        // 使用jwt自带验证对token检验
        const userInfo = jwt.verify(token, JWT_SECRET);
        ctx.state.user = userInfo;
    } catch(e) {
        switch(e.name) {
            case 'TokenExpiredError':
                console.error('token已过期', e)
                return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效的token', e)
                return ctx.app.emit('error', invalidTokenError, ctx)
        }
    }

    await next()
}

module.exports = {
    authValidator
}