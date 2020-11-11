import { renderRoutes } from 'react-router-config'
import { lazy } from 'react'
import Layout from '../layouts'

export default renderRoutes([
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('../views/Login')),
  },
  {
    path: '/',
    component: Layout,
  },
])
