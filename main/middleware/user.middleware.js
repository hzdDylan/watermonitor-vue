const { getUserInfo } = require('../service/user.service')

// 导入错误范例
const {userFormateError, 
       userExistsError, 
       userRegisterError,
       userNotExistError,
       userLoginError,
       invalidPasswordError} = require('../constant/errortype')

const registerValidator = async (ctx, next) => {
    // 验证格式是否正确
    const {username, password} = ctx.request.body;

    // 数据规范检测
    if(!username || !password) {
        ctx.status = 400;
        ctx.body = userFormateError;
        return
    }
 
    try {
        const res = await getUserInfo({username});

        if(res) {
            console.error('用户名已经存在', { user1name })
            ctx.status = 409;
            ctx.body = userExistsError;
            return 
        }
    } catch (e) {
        console.error("获取用户信息错误", e)
        ctx.status = 400;
        ctx.body = userRegisterError;
        // ctx.app.emit('error', userRegisterError, ctx);
        return
    }
 
    await next();
}

const loginValidator = async (ctx, next) => {
    // 验证格式是否正确
    const {username, password} = ctx.request.body;

    // 数据规范检测
    if(!username || !password) {
        ctx.status = 400;
        ctx.body = userFormateError;
        return
    }

    // 登录匹配
    try {
        const res = await getUserInfo({username});
        // 用户不存在
        if(!res) {
            console.error("用户不存在", {username})
            ctx.status = 400;
            ctx.body = userNotExistError;
            return
        }
        // 用户存在得到验证，验证密码
        if(res.password !== password) {
            console.error("密码错误")
            ctx.status = 400;
            ctx.body = invalidPasswordError;
            return
        }
    } catch(e) {
        console.error(userLoginError)
        ctx.app.emit('error', userLoginError, ctx);
        return
    }
    
    
 
    await next();
}



module.exports = {
    registerValidator,
    loginValidator
}