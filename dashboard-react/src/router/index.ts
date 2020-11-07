import { renderRoutes } from 'react-router-config'

import Login from '../views/Login'
import Home from '../views/Home'

export default renderRoutes([
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
])
