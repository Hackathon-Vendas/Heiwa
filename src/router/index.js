import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import { nextTick } from 'vue'
import AdminView from '@/views/AdminView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
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
