const User = require('../model/user.model')

class UserService {
    async createUser(username, psw) {
        // 数据库插入数据
        const res = User.create({
            username: username,
            password: psw,
        })

        return res
    }

    async getUserInfo({...args}) {
        // const whereOpt = {...args}
        const whereOpt = {...args}

        // id && Object.assign(whereOpt, { id })
        // username && Object.assign(whereOpt, { username })
        // password && Object.assign(whereOpt, { password })
        // is_admin && Object.assign(whereOpt, { is_admin })

        const res = await User.findOne({
            attributes: ['id', 'username', 'password', 'is_admin'],
            where: whereOpt
        })

        return res ? res.dataValues : null
    }
}

module.exports = new UserService();