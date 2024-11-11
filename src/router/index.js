import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosView
    },

  {
    path: "/home",
    name: "home",
    component:  HomeView
  }  ]
{
      path: '/',
      name: 'home',
      component: HomeView
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        nextTick(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          })
        })
      })
    }
    return { top: 0 }
  }
})

export default router
