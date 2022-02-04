// 导入模型
const {Point} = require('../model/water.model')

class WaterService {
    async createPoints(point_name, point_longitude, point_latitude) {
        // 将站点数据导入数据库
        const res = Point.create(point_name, point_longitude, point_latitude);

        return res
    }

    async update(id, point_name, point_longitude, point_latitude) {
        const {pointId, ...whereOpt} = args;
        const res = await Point.update(whereOpt, { where: { id } });
    }
}

module.exports = new WaterService()