import { isCommonObject } from './util'
import { head } from 'shelljs'

// 支持传入小写请求头
function normHeadersName(headers: any, normName: string): void {
  if (!headers) {
    return
  }

  Object.keys(headers).forEach(key => {
    if (key === normName) {
      return
    } else {
      if (key.toUpperCase() === normName.toUpperCase()) {
        headers[normName] = headers[key]
        delete headers[key]
      }
    }
  })
}

// 处理请求头
export function setHeaders(headers: any, data: any): any {
  if (!data) {
    return
  }

  normHeadersName(headers, 'Content-Type')

  if (isCommonObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  console.log(headers)
  return headers
}
