import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/home",
        name: "主控制面板",
        meta: {
          title: "首页"
        },
        component: () => import("@/views/Dashboard.vue")
      },
      {
        path: "/map",
        name: "Map",
        meta: {
          title: "地图"
        },
        component: () => import("@/views/Map.vue")
      },
      {
        path: "/statis",
        name: "Statis",
        meta: {
          title: "统计"
        },
        component: () => import("@/views/Statis.vue")
      },
      {
        path: "/warnset",
        name: "Warnset",
        meta: {
          title: "预警设置"
        },
        component: () => import("@/views/Warnset.vue")
      },
      {
        path: "/warnwatch",
        name: "Warnwatch",
        meta: {
          title: "预警情况"
        },
        component: () => import("@/views/Warnwatch.vue")
      },
      {
        path: "/setting",
        name: "Setting",
        meta: {
          title: "系统管理"
        },
        component: () => import("@/views/Setting.vue")
      },
      {
        path: "/more",
        name: "More",
        meta: {
          title: "测试区"
        },
        component: () => import("@/views/More.vue")
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'Login',
    meta: {
      title: 'Login'
    },
    component: () => import("../views/Login.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
