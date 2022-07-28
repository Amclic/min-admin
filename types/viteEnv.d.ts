// type PP<T extends keyof any, B>  = {
//   [P in T] : B 
//   // 最终返回了 B类型
// }

interface ViteEnv { 
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv {
  // readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
