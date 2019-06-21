/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const customerServiceRouter = {
  path: '/customer',
  component: Layout,
  redirect: '/customer/index',
  // name: 'Audit',
  meta: {
    title: 'Customer',
    icon: 'list'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/customer'),
      name: 'CustomerIndex',
      meta: {
        title: 'CustomerIndex'
      }
    },
    {
      path: 'operation',
      component: () => import('@/views/customer/operation'),
      name: 'Operation',
      meta: {
        title: 'Operation'
      }
    },
    {

      path: 'journalManage',
      component: () => import('@/views/customer/journalManage'),
      name: 'JournalManage',
      meta: {
        title: 'JournalManage'
      }
    },
    {
      path: 'journaDetails',
      component: () => import('@/views/customer/journaDetails'),
      name: 'JournaDetails',
      meta: {
        title: 'JournaDetails'
      },
      hidden: true
    },
    {
      path: 'workorderManage',
      component: () => import('@/views/customer/workorderManage'),
      name: 'WorkorderManage',
      meta: {
        title: 'WorkorderManage', noCache: true }
    },
    {
      path: 'editWorkorder',
      component: () => import('@/views/customer/components/EditWorkorder'),
      name: 'EditWorkorder',
      meta: {
        title: 'EditWorkorder'
      },
      hidden: true
    }
  ]
}
export default customerServiceRouter
