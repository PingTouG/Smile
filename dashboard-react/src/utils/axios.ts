import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import storage, { TOKEN_KEY } from './storage'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'antd'

NProgress.configure({ showSpinner: false })

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()

    const token = storage.get(TOKEN_KEY)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => {
    NProgress.done()
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done()
    return response.data.data
  },
  (error: AxiosError) => {
    NProgress.done()

    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = `${process.env.BASE_URL}login`
      }

      message.error(error.response.data?.message ?? error.response.data)

      return Promise.reject(error.response.data)
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance
