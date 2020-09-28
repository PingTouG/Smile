import {
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Image,
  Icon,
  CountDown,
  Sticky,
  Tag,
  Grid,
  GridItem
} from 'vant'

export default app => {
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(Search)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(Image)
  app.use(Icon)
  app.use(CountDown)
  app.use(Sticky)
  app.use(Tag)
  app.use(Grid)
  app.use(GridItem)
}
