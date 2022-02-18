import _ from 'lodash'

// type PP<T extends keyof any, B>  = {
//   [P in T] : B 
//   // 最终返回了 B类型
// }

export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if(value == true || value == false) {
      env[key] = value == 'true' ? true : false
    }
    if(/^\d+$/.test(value)) {
      env[key] = parseInt(value)
    }
  })

  return envs
}
