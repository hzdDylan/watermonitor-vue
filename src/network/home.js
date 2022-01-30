// import {request} from './request';

// import axios from 'axios';

// export function getRecommendSongs(){
//     return request({
//         url: "/recommend/songs",
//     })
// }

// export function getPersonalized(limit) {
//     return request({
//       url: '/personalized',
//       params: {
//         limit
//       }
//     })
// }

// export function getSongLists(limit, offset) {
//     return request({
//       url: '/user/playlist?uid=342063559',
//       params: {
//         limit,
//         offset
//       }
//     })
// }

// export function getPlaylistCount() {
//   return request({
//     url: '/user/subcount',
//     method: 'post',
//     withCredentials: true
//   })
// }

// // export function getPlaylistCount () {
// //   return axios.get('http://localhost:3000/user/subcount');
// // }


// export function getUserLogin(){
//   return request({
//     url: '/login/cellphone?phone=13214502393&md5_password=7d86d990d544e8d8f70fd888abd3cb03'
//   })
// }