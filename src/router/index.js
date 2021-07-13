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
    meta: { title: '首页', icon: 'fa fa-home' },
    component: Home
  },
  {
    path: '/inbound',
    name: '2',
    component: Home,
    meta: { title: '入库管理', icon: 'fa fa-sign-in' },
    children: [
      {
        path: '/inbound/inboundreceiptheader',
        name: '2-1',
        component: Sale,
        meta: { title: '收货管理', icon: '' }
      },
      {
        path: '/inbound/inboundshelfheader',
        name: '2-2',
        component: Stock,
        meta: { title: '上架单管理', icon: '' }
      },
      {
        path: '/inbound/newinbound',
        name: '2-3',
        component: Stock,
        meta: { title: '新建入库单', icon: '' }
      },
      {
        path: '/inbound/inboundheader',
        name: '2-4',
        component: Stock,
        meta: { title: '入库单管理', icon: '' }
      }
    ]
  },
  {
    path: '/outbound',
    name: '3',
    component: Home,
    meta: { title: '出库管理', icon: 'fa fa-sign-out' },
    children: [{
      path: '/outbound/orderheader',
      name: '3-1',
      meta: { title: '出库单管理', icon: '' },
      component: null
    },
    {
      path: '/outbound/pickingheader',
      name: '3-2',
      meta: { title: '拣货单管理', icon: '' },
      component: null
    },
    {
      path: '/outbound/waveheader',
      name: '3-3',
      meta: { title: '波次单管理', icon: '' },
      component: null
    },
    {
      path: '/outbound/review',
      name: '3-4',
      meta: { title: '出库复核', icon: '' },
      component: null
    }
    ]
  },
  {
    path: '/inventory',
    name: '4',
    component: Home,
    meta: { title: '库存管理', icon: 'fa fa-list-alt' },
    children: [{
      path: '/inventory/inventorystorage',
      name: '4-1',
      meta: { title: '库存查询', icon: '' },
      component: null
    },
    {
      path: '/inventory/inventorycheckrequest',
      name: '4-2',
      meta: { title: '库存盘点', icon: '' },
      component: null
    },
    {
      path: '/inventory/inventorycheckresult',
      name: '4-3',
      meta: { title: '盘点结果', icon: '' },
      component: null
    },
    {
      path: '/inventory/inventorymovetask',
      name: '4-4',
      meta: { title: '移库任务', icon: '' },
      component: null
    }
    ]
  },
  {
    path: '/querystats',
    name: '5',
    component: Home,
    meta: { title: '查询统计', icon: 'fa fa-bar-chart' },
    children: [{
      path: '/querystats/inboundreport',
      name: '5-1',
      meta: { title: '入库流水报表', icon: '' },
      component: null
    },
    {
      path: '/querystats/outboundreport',
      name: '5-2',
      meta: { title: '出库流水报表', icon: '' },
      component: null
    },
    {
      path: '/querystats/inoutboundreport',
      name: '5-3',
      meta: { title: '出入库流水报表', icon: '' },
      component: null
    },
    {
      path: '/querystats/specialitemstats',
      name: '5-4',
      meta: { title: '特殊产品统计', icon: '' },
      component: null
    }
    ]
  }
]

const router = new VueRouter({
  routes: mapMenu
})

export default router
