
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/font/iconfont.css'
import router from './router'
import './assets/css/base.css'
import * as echarts from 'echarts';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
console.log(import.meta.env);


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(ElementPlus)

app.use(router)

app.mount('#app')
