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
      component: ()=> import('../views/homePage.vue')
    },
    {
      path: '/CreateCourses',
      name: 'CreateCourses',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateCourses.vue')
    },
  ]
})

export default router
