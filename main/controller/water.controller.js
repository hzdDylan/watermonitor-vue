const path = require('path')

const {createPoints, updatePoint, getPointInfo} = require('../service/water.service')

class waterController {
    // 输入规范： 上传的文件为.json文件或一个对象（包含了.json文件和一些信息)
    async upload(ctx, next) {
        // console.log(ctx.request.files)
        const {file} = ctx.request.files;
        if(file) {
            ctx.body = {
                code: 200,
                message: "文件上传成功",
                result: {
                    waterdata_json: path.basename(file.path),
                }
            }
        } else {
            console.error("文件上传失败")
        }
    }

    async pointCreate(ctx, next) {
        const res = await createPoints(ctx.request.body)
        console.log(res);
        ctx.body = {
            code: 200,
            message: "站点发布成功",
            result: {
                ...ctx.request.body
            }
        }
    }

    async pointUpdate(ctx, next) {
        // 回调为布尔值，表示修改成功与否
        const res = await updatePoint(ctx.request.body)
        if(res) {
            // 修改成功的回调
            ctx.body = {
                code: 200,
                message: "站点信息修改成功",
                result: {
                    res
                }
            }
        } else {
            console.error("修改失败");
            ctx.body = {
                code: 500,
                message: "修改失败",
                result: ""
            }
        }
    }

    async getPointsInfo(ctx) {
        // 限制站点获取的上限
        const {limit = 10} = ctx.request.query;
        // 调用数据处理的相关方法
        const res = await getPointInfo(limit);

        // 返回
        ctx.body = {
            code: 200,
            message: "获取站点列表成功",
            result: res
        }
    }
}

module.exports = new waterController() 