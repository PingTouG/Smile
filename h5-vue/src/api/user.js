import axios from '@/utils/axios'

const baseURL = '/users'

// 手机号登录
export const phoneLogin = payload =>
  axios.post(`${baseURL}/phone-login`, payload)

// 账号密码登录
export const login = payload => axios.post(`${baseURL}/login`, payload)

// 发送验证码
export const sendCode = phone => axios.post(`${baseURL}/send-code/${phone}`)
