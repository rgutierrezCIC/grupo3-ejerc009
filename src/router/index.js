import Page2View from '@/views/Page2View.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '../views/Page1View.vue'
import Page3View from '@/views/Page3View.vue'
import AnimalDetalle from '@/components/AnimalDetalle.vue'

import EditarPersonaColores from '@/views/EditarPersonaColores.vue'

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
      component:Page2View,
    },
    {
      path: '/edit/:id',
      name: 'EditPersonaColores',
      component:EditarPersonaColores,
      props: true
    },

    {
      path: '/page3',
      name: 'page3',
      component: Page3View,
    },
    {
        path: '/animal/:id',
        name: 'DetalleAnimal',
        component: AnimalDetalle
    },
    
  
  ]
})

export default router
