import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import Vant from '@/utils/vant'
// 移动端适配：自动设置rem基准值
import 'amfe-flexible'

createApp(App)
  .use(router)
  .use(Vant)
  .mount('#app')
