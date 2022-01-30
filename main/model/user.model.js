const { DataTypes } = require('sequelize')

const seq = require('../db/sequelist')

// 用户模型
const User = seq.define('user', {
    // id: id会自动创建
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: "用户名,唯一"
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: "密码char64"
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: "管理员权限布尔值"
    }
})

// 初始化数据库用，请勿解除注释
// User.sync({force: true})
module.exports = User