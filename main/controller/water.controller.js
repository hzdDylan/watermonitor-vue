const path = require('path')

const {createPoints} = require('../service/water.service')

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
        
        ctx.body = {
            code: 200,
            message: "站点信息修改成功",
            result: {
                ...ctx.request.body
            }
        }
    }
}

module.exports = new waterController() 