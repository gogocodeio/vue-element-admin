import * as Vue from 'vue' /** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart',
  },
  children: [
    {
      path: 'keyboard',
      component: Vue.defineAsyncComponent(
        () => import('@/views/charts/keyboard')
      ),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true },
    },
    {
      path: 'line',
      component: Vue.defineAsyncComponent(() => import('@/views/charts/line')),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true },
    },
    {
      path: 'mix-chart',
      component: Vue.defineAsyncComponent(
        () => import('@/views/charts/mix-chart')
      ),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true },
    },
  ],
}

export default chartsRouter
