import axios from 'axios';

//方案一
// export function request(config, success, failure){
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config)
//         .then(res => {
//             // console.log(res);
//             success(res);
//         })
//         .catch(err => {
//             // console.log(err);
//             failure(err);
//         })
// }

//方案二
// export function request(config){
//     return new Promise((resolve,reject) => {
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         instance(config)
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err);
//             })
//     })
// }

// config = {
//     baseConfig: {
        
//     },
//     success: function (res) {

//     },
//     failure: function (err) {

//     }
// }

//方案三
export function request(config){
    //创建axios实例
    const instance = axios.create({
        // baseURL: 'http://123.207.32.32:8000',
        baseURL: 'http://localhost:8081',
        timeout: 5000
    })

    //请求拦截
    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log("请求拦截");
        console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log("响应拦截");
        console.log(err);
    })

    return instance(config);
}


