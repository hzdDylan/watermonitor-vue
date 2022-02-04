const { DataTypes } = require('sequelize')

const seq = require('../db/sequelist')

// 用户模型
/**
 * id: Joi.number().integer().required(),
    point_name: Joi.string().allow('').required(),
    point_longitude: Joi.number().required(),
    point_latitude: Joi.number().required(),
    // 下面的可能存在错误
    point_params: Joi.array().items(Joi.number(), Joi.string())
 */
// Point里仅存id,name,longitude&latitude
const Point = seq.define('point', {
    // id: id会自动创建
    point_name: {
        type: DataTypes.STRING,
        comment: "站点名"
    },
    point_longitude: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
        comment: "经度"
    },
    point_latitude: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
        comment: "纬度"
    }
})

// 初始化数据库用，请勿解除注释
// Point.sync({force: true})
module.exports = {
    Point
}