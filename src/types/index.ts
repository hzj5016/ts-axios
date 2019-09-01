// 字符串约束
export type Method =
  | 'get'
  | 'Get'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

// 公共类型接口

export interface AxiosRequestConfig {
  url: string
  method?: string
  // post 数据
  data?: any
  // get 参数
  params: any
}
