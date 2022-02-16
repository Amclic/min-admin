import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupPlugins } from './plugins'

async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupPlugins(app)

  await router.isReady() // 等待路由挂载完毕的时候在进行挂载
  // app.use(router)
  
  app.mount('#app')
}

bootstrap()

