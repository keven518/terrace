/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const basicInformationRouter = {
  path: '/basic',
  component: Layout,
  redirect: '/basic/basicComEdit',
  alwaysShow: true,
  meta: {
    title: 'Basic',
    icon: 'list'
  },
  children: [
    // 菜单 注释的路由 注释模块由后台传参
    {
      path: 'basicCompany',
      component: () => import('@/views/basic-information/basicCompany'),
      name: 'BasicCompany',
      meta: {
        title: 'BasicComEdit'

      }
    },
    // {
    //   path: 'basicOrganizational',
    //   component: () => import('@/views/basic-information/basicOrganizational'),
    //   name: 'BasicOrganizational',
    //   meta: {
    //     title: 'basicorganizational',  }
    // },
    // {
    //   path: 'driverList',
    //   component: () => import('@/views/basic-information/driverList'),
    //   name: 'DriverList',
    //   meta: {
    //     title: 'driverList',
    //   }
    // },
    // {
    //   path: 'carList',
    //   component: () => import('@/views/basic-information/carList'),
    //   name: 'CarList',
    //   meta: {
    //     title: 'carList',
    //   }
    // },
    {
      path: 'basicComEdit',
      component: () => import('@/views/basic-information/basicCompanyViews/basicComEdit'),
      name: 'BasicComEdit',
      meta: {
        title: 'BasicComEdit'
      }
    },
    {
      path: 'carListView/:list',
      component: () => import('@/views/basic-information/carListView/carListView'),
      name: 'CarListView',
      meta: {
        title: 'CarListView'
      }
    },
    {
      path: 'carlistEditOne',
      component: () => import('@/views/basic-information/carListEdit/carlistEditOne'),
      name: 'CarlistEditOne',
      meta: {
        title: 'CarlistEditOne'
      }
    },
    {
      path: 'carListEdit',
      component: () => import('@/views/basic-information/carListEdit/carListEdit'),
      name: 'CarListEdit',
      meta: {
        title: 'CarListEdit'
      }
    },
    {
      path: 'orgDetail',
      component: () => import('@/views/basic-information/basicCompanyViews/basicComEdit'),
      name: 'OrgDetail',
      meta: {
        title: 'OrgDetail'
      }
    },
    {
      path: 'basicComAdd',
      component: () => import('@/views/basic-information/basicCompanyViews/basicComAdd'),
      name: 'BasicComAdd',
      meta: {
        title: 'BasicComAdd'
      }
    },
    {
      path: 'addCarListOne',
      component: () => import('@/views/basic-information/addCarList/addCarListOne'),
      name: 'AddCarListOne',
      meta: {
        title: 'AddCarListOne'
      }
    },

    {
      path: 'addCarListTwo',
      component: () => import('@/views/basic-information/addCarList/addCarListTwo'),
      name: 'AddCarListTwo',
      meta: {
        title: 'AddCarListTwo'
      }
    },
    {
      path: 'addCarListThree',
      component: () => import('@/views/basic-information/addCarList/addCarListThree'),
      name: 'AddCarListThree',
      meta: {
        title: 'AddCarListThree'
      }
    },
    // {
    //   path: 'addCarListOne',
    //   component: () => import('@/views/basic-information/addCarList/addCarListOne'),
    //   name: 'AddCarListOne',
    //   meta: {
    //     title: 'addCarListOne',
    //
    //   },
    //   hidden: true
    // },

    {
      path: 'addDriverInfo',
      component: () => import('@/views/basic-information/driverInfoViews/addDriverInfo'),
      name: 'AddDriverInfo',
      meta: {
        title: 'AddDriverInfo'
      }
    },

    {
      path: 'driverInfoDetail',
      component: () => import('@/views/basic-information/driverInfoViews/driverDetail'),
      name: 'DriverInfoDetail',
      meta: {
        title: 'DriverInfoDetail'
      }
    }, {
      path: 'editdriverInfo',
      component: () => import('@/views/basic-information/driverInfoViews/editDriverInfo'),
      name: 'EditdriverInfo',
      meta: {
        title: 'EditdriverInfo'
      }
    }, {
      path: 'addDriverLisence',
      component: () => import('@/views/basic-information/driverInfoViews/addDriverLisence'),
      name: 'AddDriverLisence',
      meta: {
        title: 'AddDriverLisence'
      }
    },
    {
      path: 'driverExistDetail',
      component: () => import('@/views/basic-information/driverInfoViews/driverExistDetail'),
      name: 'DriverExistDetail',
      meta: {
        title: 'DriverExistDetail'
      }
    }, {
      path: 'driverFailtureDetail',
      component: () => import('@/views/basic-information/driverInfoViews/driverFailtureDetail'),
      name: 'DriverFailtureDetail',
      meta: {
        title: 'DriverFailtureDetail'
      }
    }

  ]
}
export default basicInformationRouter
