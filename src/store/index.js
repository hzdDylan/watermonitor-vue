import { createStore } from 'vuex'

export default createStore({
  state: {
    navItem: [
      {
        icon: "el-icon-lx-home",
        index: "/home",
        title: "首页"
      },
      {
        icon: "el-icon-lx-data",
        index: "/data",
        title: "数据统计",
        subs: [
          {
            index: "/map",
            title: "地图"
          },
          {
            index: "/statis",
            title: "统计"
          }
        ]
      },
      {
        icon: "el-icon-lx-warning",
        index: "/warn",
        title: "预警处理",
        subs: [
          {
            index: "/warnset",
            title: "预警设置"
          },
          {
            index: "/warnwatch",
            title: "预警情况"
          }
        ]
      },
      {
        icon: "el-icon-lx-set-up",
        index: "/setting",
        title: "系统管理"
      },
      {
        icon: "el-icon-more",
        index: "/more",
        title: "更多-预测开发"
      }
    ],
    collapse: false,

    qualityData: [],

    monitoringSite: [
      {
        "id":1,
        "longitude": 126.630,
        "latitude": 45.750,
        "name": "观测点1",
        "degree": "Ⅰ",
        "PH": "9.10",
        "temperature": "21.4°C",
        "EC": "0.59ms/cm"
      },
      {
        "id":2,
        "longitude": 126.640,
        "latitude": 45.750,
        "name": "观测点2",
        "degree": "Ⅱ",
        "PH": "4.18",
        "temperature":"21.6°C",
        "EC":"0.63ms/cm"
      },
      {
        "id":3,
        "longitude": 126.650,
        "latitude": 45.750,
        "name": "观测点3",
        "degree": "Ⅲ",
        "PH": "4.18",
        "temperature":"21.6°C",
        "EC":"0.63ms/cm"
      },
      {
        "id":4,
        "longitude": 126.660,
        "latitude": 45.750,
        "name": "观测点4",
        "degree": "Ⅳ",
        "PH": "4.18",
        "temperature":"21.6°C",
        "EC":"0.63ms/cm"
      },
      {
        "id":5,
        "longitude": 126.670,
        "latitude": 45.750,
        "name": "观测点5",
        "degree": "Ⅴ",
        "PH": "4.18",
        "temperature":"21.6°C",
        "EC":"0.63ms/cm"
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
