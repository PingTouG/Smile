import { lazy } from 'react'
import { RouteConfig } from 'react-router-config'

const routes: Array<RouteConfig> = [
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../views/Dashboard')),
  },
  {
    path: '*',
    meta: {
      error: 404,
    },
    component: lazy(() => import('../views/Error')),
  },
]

export default routes
