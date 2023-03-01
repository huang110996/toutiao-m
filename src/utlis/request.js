// 请求模块
// 引入axios
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/' // 基础路径
})
// 向外导出
export default request
