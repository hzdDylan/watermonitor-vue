// 导入模型
const {Point} = require('../model/water.model')

class WaterService {
    async createPoints(point_name, point_longitude, point_latitude) {
        // 将站点数据导入数据库
        const res = Point.create(point_name, point_longitude, point_latitude);

        return res
    }

    async updatePoint({...args}) {
        const {id, ...whereOpt} = args;
        const res = await Point.update(whereOpt, { where: { id } });

        // res为[0]或[1]，0为修改失败，1为修改成功
        return res[0] > 0 ? true : false
    }

    async getPointInfo(limit)  {
        // const offset = (pageNum - 1) * pageSize;
        const {count, rows} = await Point.findAndCountAll({
            // offset: offset,
            limit: limit
        })

        return {
            total: count,
            list: rows
        }
    }
}

module.exports = new WaterService()