const { createUser, getUserInfo } = require('../service/user.service')

// 导入jwt
const jwt = require('jsonwebtoken')

// 导入秘钥
const {JWT_SECRET} = require('../config/config.default')

class UserController {
    async register(ctx, next) {
        // 获取数据
        const {username, password} = ctx.request.body
        
        // 数据库操作
        const res = await createUser(username, password);
        // 返回结果
        ctx.body = {
            code: 200,
            message: "用户注册成功",
            result: {
                id: res.id,
                username: res.username
            }
        }
    }

    async login(ctx, next) {
        const {username, password} = ctx.request.body;
        // 授权用户信息，使用jwt
        try {
            const {pwd, ...res} = await getUserInfo({username})
            
            ctx.body = {
                code: 0,
                message: '登录成功',
                result: {
                    token: jwt.sign(res, JWT_SECRET, {expiresIn: '1d'})
                }
            }
        }catch(e) {
            console.error("登录失败", e)
        }
    }
}

module.exports = new UserController();