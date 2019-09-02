import { isDate, isObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3a/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2c/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5b/gi, '[')
    .replace(/%5d/gi, ']')
}

// 把 params 拼接到 url上(get 方法)
export function buildURL(url: string, params: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]

    if (val === null || typeof val === undefined) {
      return
    }
    let values = []
    // 值为数组
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach(item => {
      if (isDate(item)) {
        item = item.toISOString()
      } else if (isObject(item)) {
        item = JSON.stringify(item)
      }
      parts.push(`${encode(key)}=${encode(item)}`)
    })
  })

  let resParams = parts.join('&')
  // 忽略 hash
  if (resParams) {
    if (url.indexOf('#') !== -1) {
      url = url.split('#')[0]
    }
    if (url.indexOf('?') !== -1) {
      url = url + '&' + resParams
    } else {
      url = url + '?' + resParams
    }
  }

  return url
}
