import { createRouter, createWebHistory } from 'vue-router'
import Boy from '../views/Boy.vue'
import Girl from '../views/Girl.vue'
import leastPopular from '../views/LeastPopular.vue'
import mostPopular from '../views/MostPopular.vue'
import App from '../App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/boy',
      name: 'PopBoy',
      component: Boy
    },
    {
      path: '/girl',
      name: 'Girl',
      component: Girl
    },
    {
      path: '/leastPop',
      name: 'least',
      component: leastPopular
    },
    {
      path: '/mostPop',
      name: 'Most',
      component: mostPopular
    }
  ]
})

export default router
