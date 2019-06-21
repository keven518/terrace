/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const carConfigurationRouter = {
  path: '/carConfiguration',
  component: Layout,
  redirect: '/carConfiguration/carClassify',
  alwaysShow: true,
  // name: 'Audit',
  meta: {
    title: 'carConfiguration',
    icon: 'list'
  },
  children: [
    {
      path: 'carClassify',
      component: () => import('@/views/car-configuration/carClassify'),
      name: 'CarClassify',
      meta: {
        title: 'carClassify' }
    }
  ]
}
export default carConfigurationRouter
