import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import Streetcar from '@/pages/Streetcar'
import Bus from '@/pages/Bus'
import Trolley from '@/pages/Trolley'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/buss/:number?',
      name: 'Bus',
      component: Bus
    },
    {
      path: '/tramm/:number?',
      name: 'Streetcar',
      component: Streetcar
    },
    {
      path: '/troll/:number?',
      name: 'Trolley',
      component: Trolley
    },
    {
      path: '/peatus/:name?',
      name: 'Stop',
      component: Stop
    }
  ]
})
