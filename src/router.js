import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Manage from './views/Manage.vue'
import Details from './views/Details.vue'
import Imprint from './views/Imprint.vue'
import Privacy from './views/Privacy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nodes/:nodeKey',
      name: 'details',
      component: Details,
      props: true,
    },
    {
      path: '/register',
      name: 'register',
      component: Manage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: Imprint
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    }
  ]
})