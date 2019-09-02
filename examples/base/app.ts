import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    'accept': 'text/plain'
  },
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr,
  headers: {}
})