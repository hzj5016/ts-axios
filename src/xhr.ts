import { AxiosRequestConfig } from './types/index'
import { request } from 'https'

export default function xhr(config: AxiosRequestConfig): void {
  const { method = 'get', url, data = null, headers } = config
  const request = new XMLHttpRequest()

  // 第三个参数为同步函数异步, true 为异步(默认的)
  request.open(method.toUpperCase(), url, true)
  setRequestHeader(request, headers)
  request.send(data)
}

function setRequestHeader(request: XMLHttpRequest, headers: any): void {
  Object.keys(headers).forEach(key => {
    const val = headers[key]
    request.setRequestHeader(key, val)
  })
}
