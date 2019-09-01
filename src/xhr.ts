import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig): void {
  const { method = 'get', url, data = null } = config
  const request = new XMLHttpRequest()

  // 第三个参数为同步函数异步, true 为异步(默认的)
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
