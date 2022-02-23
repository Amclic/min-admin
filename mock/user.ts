import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'

export default [
  {
    url: '/api/getinfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'OK',
        type: 'success',
        userInfo: {
          name: 'amclic',
          age: 18,
          avatar: './avatar/8.jpg'
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'OK',
        type: 'success',
        userInfo: {
          token: Random.string(10),
        },
      }
    },
  }
] as MockMethod[]