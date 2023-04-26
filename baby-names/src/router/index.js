import { createRouter, createWebHistory } from 'vue-router'
import Boy from '../views/Boy.vue'
import Girl from '../views/Girl.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PopBoy',
      component: Boy
    },
    {
      path: '/girl',
      name: 'Girl',
      component:Girl,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Girl.vue')
    }
  ]
})

export default router
