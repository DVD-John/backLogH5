import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 导入路由配置

const app = createApp(App)
app.use(router)
app.mount('#app')