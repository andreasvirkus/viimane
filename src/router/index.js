import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import Streetcar from '@/pages/Streetcar'
import Bus from '@/pages/Bus'
import Trolley from '@/pages/Trolley'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/buss',
      name: 'Bus',
      component: Bus
    },
    {
      path: '/tramm',
      name: 'Streetcar',
      component: Streetcar
    },
    {
      path: '/troll',
      name: 'Trolley',
      component: Trolley
    }
  ]
})
