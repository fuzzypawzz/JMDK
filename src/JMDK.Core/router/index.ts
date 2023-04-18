import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/JMDK.UI/views/home-view/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: {
        // ...
      },
      component: HomeView,
    },
  ],
})

export default router
