import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // the base url the app is being served from.
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ]
})

export default router
