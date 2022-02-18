interface ViteEnv { 
  VITE_SOME_KET: number
  VITE_ROUTE_AUTOLOAD: boolean
  VITE_API_URL: string
  VITE_UR?: string // 可选属性
}

interface ImportMetaEnv extends ViteEnv {
  // readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
