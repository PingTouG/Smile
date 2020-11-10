import axios from '../utils/axios'
import { LoginParams } from '../types'
import { User } from '../types/model'

// 登录
export const login = (
  payload: LoginParams
): Promise<{ user: User; token: string }> => axios.post('/users/login', payload)
