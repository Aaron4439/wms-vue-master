import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Sale from '../pages/sale/index'
import Stock from '../pages/stock/index'
import Ktree from '../components/ktree/index'

Vue.use(VueRouter)

export const mapMenu = [
  {
    path: '/',
    name: 'home',
    component: Home,
    noMenu: true
  },
  {
    path: '/ktree',
    name: 'ktree',
    component: Ktree,
    noMenu: true
  },
  {
    path: '/lock',
    name: 'pagelock',
    component: Sale,
    noMenu: true
  },
  {
    path: '/dashboard',
    name: '1',
    meta: { title: '首页', icon: '' },
    component: Home
  },
  {
    path: '/sale',
    name: '2',
    component: Home,
    meta: { title: '销售管理', icon: '' },
    children: [
      {
        path: '/sale/offer',
        name: '2-1',
        component: Sale,
        meta: { title: '销售报价单', icon: '' }
      },
      {
        path: '/sale/indent',
        name: '2-2',
        component: Stock,
        meta: { title: '销售订货单', icon: '' }
      }
    ]
  },
  {
    path: '/stock',
    name: '3',
    component: Home,
    meta: { title: '库存管理', icon: '' },
    children: [{
      path: '/stock/outStock',
      name: '3-1',
      meta: { title: '出库管理', icon: '' },
      component: null
    },
    {
      path: '/stock/putStock',
      name: '3-2',
      meta: { title: '入库管理', icon: '' },
      component: null
    },
    {
      path: '/stock/endMonthHandle',
      name: '3-3',
      meta: { title: '月末处理', icon: '' },
      component: null
    }
    ]
  }
]

const router = new VueRouter({
  routes: mapMenu
})

export default router
