import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import BasisLayout from '@/layouts/BasisLayout'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () =>
        import(/* webpackChunkName: 'Login' */ '@/views/User/Login')
    },
    {
      path: '/',
      component: BasisLayout,
      children: routes
    }
  ]
})

export default router
