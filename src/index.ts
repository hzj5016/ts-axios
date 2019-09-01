import { AxiosRequestConfig, Method } from './types/index'
import Xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  Xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = processUrl(config)
}

function processUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
