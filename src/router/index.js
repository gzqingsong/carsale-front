import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/seal',
    component: Layout,
    meta: {
      title: '申请签章',
      icon: 'clipboard',
      roles: ['editor']
    },
    children: [
      {
        path: 'applySeal',
        component: () => import('@/views/saleOrder/addOrder'),
        name: 'applySeal',
        meta: { title: '申请签章' }
      }
    ]
  },
  {
    path: '/customer',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: '验章',
      icon: 'customer',
      roles: ['admin']
    },
    children: [
      {
        path: 'message',
        component: () => import('@/views/customer/message'),
        name: 'customerMessage',
        meta: {
          title: '编号验章',
          roles: ['admin']
        }
      },
      {
        path: 'message',
        component: () => import('@/views/customer/message'),
        name: 'customerMessage',
        meta: {
          title: 'PDF验章',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/history',
    component: Layout,
    meta: { roles: ['editor'] },
    children: [
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/about/message'),
        meta: {
          title: '历史记录',
          icon: 'myEmp',
          roles: ['editor']
        }
      }
    ]
  },
  {
    path: '/histList',
    component: Layout,
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/about/message'),
        meta: {
          title: '历史记录',
          icon: 'myEmp',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    meta: {
      title: '配置管理',
      icon: 'customer',
      roles: ['useradmin'] },
    children: [
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/about/message'),
        meta: {
          title: '名单录入',
          icon: 'myEmp',
          roles: ['useradmin']
        }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/about/message'),
        meta: {
          title: '电子印章录入',
          icon: 'myEmp',
          roles: ['useradmin']
        }
      }
    ]
  },
  {
    path: '/my',
    component: Layout,
    meta: { roles: ['editor'] },
    children: [
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/about/message'),
        meta: {
          title: '我的信息',
          icon: 'myEmp',
          roles: ['editor']
        }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
