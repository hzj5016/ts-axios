import { AxiosRequestConfig, Method } from './types/index'
import Xhr from './xhr'
import { buildURL } from './helpers/url'
import { transRequsetData } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  Xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = processUrl(config)
  config.data = processData(config)
}

function processUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function processData(config: AxiosRequestConfig): any {
  const { data } = config
  return transRequsetData(data)
}

export default axios
