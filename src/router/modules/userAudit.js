/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userAuditRouter = {
  path: '/audit',
  component: Layout,
  redirect: '/audit/enterpriseAudit',
  // name: 'Audit',
  meta: {
    title: 'audit',
    icon: 'list'
  },
  children: [
    {
      path: 'enterpriseAudit',
      component: () => import('@/views/user-audit/enterpriseAudit'),
      name: 'EnterpriseAudit',
      meta: {
        title: 'enterpriseAudit'
      }
    },
    {
      path: 'personalAudit',
      component: () => import('@/views/user-audit/personalAudit'),
      name: 'PersonalAudit',
      meta: {
        title: 'personalAudit'
      }
    },
    {
      path: 'driverAudit',
      component: () => import('@/views/user-audit/driverAudit'),
      name: 'DriverAudit',
      meta: {
        title: 'driverAudit'
      }
    },
    {
      path: 'vehicleAudit',
      component: () => import('@/views/user-audit/vehicleAudit'),
      name: 'VehicleAudit',
      meta: {
        title: 'vehicleAudit' }
    },
    {
      path: 'enterpriseInterface',
      component: () => import('@/views/user-audit/components/EnterpriseInterface'),
      name: 'EnterpriseInterface',
      meta: {
        title: 'enterpriseInterface' },
      hidden: true
    },
    {
      path: 'personalInterface',
      component: () => import('@/views/user-audit/components/personalDialog'),
      name: 'PersonalDialog',
      meta: {
        title: 'personalInterface' },
      hidden: true
    },
    {
      path: 'driverInterface',
      component: () => import('@/views/user-audit/components/DriverInterface'),
      name: 'DriverInterface',
      meta: {
        title: 'DriverInterface' },
      hidden: true
    },
    {
      path: 'vehicleInterface',
      component: () => import('@/views/user-audit/components/VehicleInterface'),
      name: 'VehicleInterface',
      meta: {
        title: 'VehicleInterface' },
      hidden: true
    }
  ]
}
export default userAuditRouter
