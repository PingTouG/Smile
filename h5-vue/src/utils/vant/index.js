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
  GridItem,
  TreeSelect,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SwipeCell,
  Button,
  SubmitBar,
  Empty
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
  app.use(TreeSelect)
  app.use(Checkbox)
  app.use(CheckboxGroup)
  app.use(Stepper)
  app.use(SwipeCell)
  app.use(Button)
  app.use(SubmitBar)
  app.use(Empty)
}
