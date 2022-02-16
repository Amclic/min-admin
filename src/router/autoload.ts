// 最终要生成如下格式
// {
//   path: '*',
//   [name: '*',]
//   component: () => import()
//   children: []    
// }
import { RouteRecordRaw } from "vue-router"

// 提取布局路由
const layouts = import.meta.globEager('../layouts/*.vue')
// 提取子目录路由
const views =  import.meta.globEager('../views/**/*.vue')

function getRoutes() {
  // 声明路由 | 断言
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })

  return layoutRoutes
}

// ---------- 获取布局的路由 ----------
function getRouteByModule(file: string, module: { [key: string]: any }) {
  // ---------- 寻找到路径的名字 ----------
  // file?.split('/')?.pop()?.split('.')[0]) 方法一
  // file.match(/\.\.\/layouts\/(.+?)\.vue/i)) 方法二
  // file.replace(/.+layouts\/|\.vue/gi, '')) 
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${name}`,
    name: name.replace('/', '.'),
    component: module.default
  } as RouteRecordRaw

  return Object.assign(route, module.default?.route)
}

// ---------- 获取布局的子路由 ----------
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes =  [] as RouteRecordRaw[]

  Object.entries(views).forEach(([file, module]) =>{    
    if(file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module)
      routes.push(route)
    }
  })
  
  return routes
}

export default getRoutes()