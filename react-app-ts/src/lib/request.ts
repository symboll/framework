import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse  } from 'axios'
const baseURL = process.env.REACT_APP_BASE_URL

class HttpRequest {
  constructor (public baseUrl = baseURL) {}
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      // withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 3000
    }
    return config
  }

  interceptors (instance: AxiosInstance, url: string| undefined) {
    instance.interceptors.request.use(config => {
      // config.headers['Authorization'] = `Bearer ${getToken()}`
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      const { data, status } = res
      return { data, status } as AxiosResponse<any>
    }, error => {
      return Promise.reject(error)
    })
  }
  request (options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
