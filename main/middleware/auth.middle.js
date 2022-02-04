// 导入jwt
const jwt = require('jsonwebtoken')
// 导入秘钥
const {JWT_SECRET} = require('../config/config.default')
// 导入错误常量
const {tokenExpiredError, invalidTokenError, hasnAdminPermissionError} = require('../constant/errortype')

// authorize
const authValidator = async (ctx, next) => {
    const {authorization = ""} = ctx.request.header;
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

// 水质数据的权限
const hasWaterDataPermission = async (ctx, next) => {
    const {is_admin} = ctx.state.user;
    if(!is_admin) {
        console.error('非管理员权限用户尝试修改水质数据', ctx.state.user)
        return ctx.app.emit('error', hasnAdminPermissionError, ctx)
    }

    await next()
}

module.exports = {
    authValidator,
    hasWaterDataPermission
}