import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/JMDK.UI/views/HomeView.vue'
import { contentModel as homeViewContentModel } from '@/JMDK.UI/views/HomeViewContentModel'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: {
        content: homeViewContentModel,
      },
      component: HomeView,
    },
  ],
})

export default router