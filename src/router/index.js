import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import { nextTick } from 'vue'

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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return nextTick().then(() => {
        const element = document.querySelector(to.hash);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }})
      }
    }
  });

export default router