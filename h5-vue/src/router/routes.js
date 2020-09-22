const routes = [
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      title: '分类',
      menu: {
        sort: 2,
        text: '分类',
        icon: 'apps-o'
      }
    },
    component: () =>
      import(/* webpackChunkName: "categories" */ '../views/Categories')
  },
  {
    path: '',
    name: 'Home',
    meta: {
      title: '首页',
      menu: {
        sort: 1,
        text: '首页',
        icon: 'home-o'
      }
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    meta: {
      title: '购物车',
      menu: {
        sort: 3,
        text: '购物车',
        icon: 'shopping-cart-o'
      }
    },
    component: () =>
      import(/* webpackChunkName: "shoppingCart" */ '@/views/ShoppingCart')
  },
  {
    path: 'user',
    name: 'User',
    meta: {
      title: '我的',
      menu: {
        sort: 4,
        text: '我的',
        icon: 'user-o'
      }
    },
    component: () => import(/* webpackChunkName: "user" */ '@/views/User')
  }
]

export default routes

//  底部导航
export const tabbarList = routes
  .filter(item => !!item?.meta?.menu)
  .sort((now, next) => now.meta.menu.sort - next.meta.menu.sort)
  .map(item => ({
    name: item.name,
    text: item.meta.menu?.text ?? item.meta?.title,
    icon: item.meta.menu?.icon
  }))
