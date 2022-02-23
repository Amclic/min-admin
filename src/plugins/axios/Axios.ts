import axios, { AxiosRequestConfig } from 'axios'

export default class Axios { 
  private instance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors()
  }

  // ---------- 暴露接口 ----------
  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.request<D>(config)
        resolve(res.data)
      } catch (err) {
        reject(err)
      }
    })
  } 

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      config => {
      // 在发送请求之前做些什么
      return config;
      }, 
      error => {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      response=> {
      // 对响应数据做点什么
      return response
      },
      error => {
      // 对响应错误做点什么
        return Promise.reject(error)
      }
     )
  }
}