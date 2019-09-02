import { isCommonObject } from './util'

// 处理请求体
export function transRequsetData(data: any): any {
  if (isCommonObject(data)) {
    return JSON.stringify(data)
  }

  return data
}
