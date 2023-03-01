// 用户相关的请求模块
import request from '@/utlis/request'
// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
// 发送验证码  mobile拼接到后面
export const sentSms = mobile => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
