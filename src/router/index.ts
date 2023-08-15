import { createRouter, createWebHistory } from 'vue-router'
import ShouYe from '@/LayOut/ShouYe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayOut',
      component: ShouYe,
      children: [
        {
          path: '/',
          redirect: '/dashBored'
        },
        {
          path: '/dashBored',
          name: 'dashBored',
          component: () => import('@v/DashBoard/DashBoard.vue')
        
    },
  ],
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@v/Setting/Setting.vue')
    }
  ]
})

export default router
