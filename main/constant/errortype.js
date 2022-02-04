module.exports = {
    userFormateError: {
        code: "1001",
        message: "用户名或密码为空",
        result: ''
    },
    userExistsError: {
        code: '1002',
        message: "用户已存在",
        result: ''
    },
    userRegisterError: {
        code: '1003',
        message: "用户注册错误",
        result: ''
    },
    userNotExistError: {
        code: '1004',
        message: "用户不存在",
        result: ''
    },
    userLoginError: {
        code: '1005',
        message: "用户登录失败",
        result: ''
    },
    invalidPasswordError: {
        code: '1006',
        message: "密码错误",
        result: ''
    },
    tokenExpiredError: {
        code: '1101',
        message: 'token已过期',
        result: ''
    },
    invalidTokenError: {
        code: '1102',
        message: '无效token',
        result: ''
    },
    hasnAdminPermissionError: {
        code: '1103',
        message: '无管理员权限',
        result: ''
    },
    pointFormatError: {
        code: '1201',
        message: '站点格式校验错误',
        result: ''
    }
}