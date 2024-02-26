import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => './App.vue'
    },
    {
      path: '/login',
      name: 'login',
      component: () => '@/views/Account/login'
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => '@/views/Messenger/chat'
    }
  ]
})

export default router
