import {request} from "./request";

export function getDetail(id) {
    console.log("test/Get")
    console.log(id);
    return request({
        url: '/playlist/detail',
        params: {
            id: id
        }
    })
}