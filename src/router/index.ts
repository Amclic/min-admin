import { App } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import routes from './routes'
import layoutRoutes  from './autoload'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    ...layoutRoutes
  ]
})

// 从入口文件里拆分出来设置路由方法 
export function setupRouter(app: App) {
  app.use(router)
}

export default router