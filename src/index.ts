import { AxiosRequestConfig, Method } from './types/index'
import Xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  Xhr(config)
}

export default axios
