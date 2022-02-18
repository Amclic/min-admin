import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'

// import vue from '@vitejs/plugin-vue' 拆分到vite插件目录下
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return { 
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    }
  }
}
