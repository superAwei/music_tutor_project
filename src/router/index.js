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
      name: 'index',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
      ]
    },
    {
      path: '',
      name: 'home',
      component: ()=> import('../views/HomePage.vue')
    },
    {
      path: '/BeATeacherStep1',
      name: 'BeATeacherStep1',
      component: () => import('../views/BeATeacherStep1.vue')
    },
    {
      path: '/BeATeacherStep2',
      name: 'BeATeacherStep2',
      component: () => import('../views/BeATeacherStep2.vue')
    },
    {
      path: '/BeATeacherStep3',
      name: 'BeATeacherStep3',
      component: () => import('../views/BeATeacherStep3.vue')
    },
    {
      path: '/BeATeacherStep4',
      name: 'BeATeacherStep4',
      component: () => import('../views/BeATeacherStep4.vue')
    },
    {
      // 登入頁
      path: '/LoginSignUp',
      name: 'loginsignup',
      component: () => import('../views/LoginSignUp.vue')
    },
    {
      // 註冊頁
      path: '/Register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
  ]
})

export default router
