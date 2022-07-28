import { App } from "vue"
import { setupTailwindcss } from "./tailwindcss"
import _ from "lodash"

function autoRegisterComponents(app: App) {
  const components = import.meta.globEager('../components/form/*.vue')
  Object.keys(components).forEach(key => {
    const componentName = key.split('/').pop()?.split('.')[0] as string
    app.component(_.camelCase(componentName), components[key].default)
  })
}

export function setupPlugins(app: App) {
  autoRegisterComponents(app)
  setupTailwindcss()
}

