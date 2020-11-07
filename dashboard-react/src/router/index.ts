import { renderRoutes } from 'react-router-config'
import {lazy} from 'react'

export default renderRoutes([
  {
    path: '/login',
    exact: true,
    component: lazy(()=> import('../views/Login')),
  },
  {
    path: '/',
    exact: true,
    component: lazy(()=> import('../views/Home')),
  },
])
