
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/font/iconfont.css'
import router from './router'
import './assets/css/base.css'
console.log(import.meta.env);


const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

app.use(router)

app.mount('#app')