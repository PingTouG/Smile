import { Tabbar, TabbarItem, Search, Swipe, SwipeItem, Image, Icon } from 'vant'

export default app => {
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(Search)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(Image)
  app.use(Icon)
}
