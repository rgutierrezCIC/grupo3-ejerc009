import Page2View from '@/views/Page2View.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '../views/Page1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component:Page1View
    },
    {
      path: '/page2',
      name: 'page2',
      component:Page2View
    }
  ]
})

export default router
