import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 之前的
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(/#/),
  // 路由表切換到對應頁面的地方
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '',
      name: 'home',
      component: ()=> import('../views/HomePage.vue')
    },
    {
      path: '/CreateCourses',
      name: 'CreateCourses',
      component: () => import('../views/CreateCourses.vue')
    },
    {
      path: '/LoginSignUp',
      name: 'loginsignup',
      component: () => import('../views/LoginSignUp.vue')
    },
  ]
})

export default router
