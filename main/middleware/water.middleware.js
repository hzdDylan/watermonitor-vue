const Joi = require('joi')

const {pointFormatError} = require('../constant/errortype')

// 定义站点创建校验规则
/**
 * id: 站点id
 * name： 站点名称
 * longitude和latitude： 站点经纬度
 * params：站点的检测参数，如[ph, ec, temperature]
 */
const schema = Joi.object({
    id: Joi.number().integer().required(),
    point_name: Joi.string().allow('').required(),
    point_longitude: Joi.number().required(),
    point_latitude: Joi.number().required(),
    // 下面的可能存在错误
    point_params: Joi.array().items(Joi.number(), Joi.string())
})

// 
const waterPointValidator = async(ctx, next) => {
    // 对传入上下文进行检验  
    const {value, error} = schema.validate(ctx.request.body);
    // 如果检验无错误则error不存在，若存在错误则error存在
    if(error) {
        console.error('站点格式校验错误', error)
        return ctx.app.emit('error', pointFormatError, ctx)
    }

    // console.log("成功添加站点", value)
    // 已经是最后一个了就不用next了
    await next()
}

module.exports = {
    waterPointValidator
}