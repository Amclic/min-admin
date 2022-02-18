import vue from '@vitejs/plugin-vue'
import { createLogger, Plugin } from 'vite'
import setupMockPlugin  from './mock'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]

  console.log()

  plugins.push(setupMockPlugin(isBuild))

   return plugins
}