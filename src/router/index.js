import Vue from 'vue'
import Router from 'vue-router'

import Bus from '@/pages/Bus'
import Stop from '@/pages/Stop'
import Landing from '@/pages/Landing'
import Trolley from '@/pages/Trolley'
import NotFound from '@/pages/NotFound'
import Streetcar from '@/pages/Streetcar'

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
      component: Bus,
      props: true
    },
    {
      path: '/tramm/:number?',
      name: 'Streetcar',
      component: Streetcar,
      props: true
    },
    {
      path: '/troll/:number?',
      name: 'Trolley',
      component: Trolley,
      props: true
    },
    {
      path: '/peatus/:id?',
      name: 'Stop',
      component: Stop,
      props: true
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
