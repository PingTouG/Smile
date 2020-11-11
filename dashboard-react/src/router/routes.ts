import { lazy } from 'react'

const routes = [
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
