import { lazy } from 'react'
import { RouteConfig } from 'react-router-config'
import { RadarChartOutlined, UserOutlined } from '@ant-design/icons'
const routes: Array<RouteConfig> = [
  {
    path: '/dashboard',
    exact: true,
    meta: {
      menu: {
        text: '数据看板',
        Icon: RadarChartOutlined,
      },
      breadcrumb: [
        {
          path: '/dashboard',
          text: '首页',
        },
        {
          text: '数据看板',
        },
      ],
    },
    component: lazy(() => import('../views/Dashboard')),
  },
  {
    path: '/user',
    exact: true,
    meta: {
      menu: {
        text: '用户管理',
        Icon: UserOutlined,
      },
      breadcrumb: [
        {
          path: '/dashboard',
          text: '首页',
        },
        {
          text: '用户管理',
        },
      ],
    },
    component: lazy(() => import('../views/User')),
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
