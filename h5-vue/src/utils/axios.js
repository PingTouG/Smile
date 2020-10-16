import axios from 'axios'
import { tokenStorage } from './storage'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Notify } from 'vant'

NProgress.configure({ showSpinner: false })

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

instance.interceptors.request.use(
  config => {
    NProgress.start()

    const token = tokenStorage.get()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    NProgress.done()
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error => {
    console.log(error.response)
    NProgress.done()

    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = `${process.env.BASE_URL}login`
      }

      Notify({
        type: 'danger',
        message: error.response.data?.message ?? error.response.data
      })

      return Promise.reject(error.response.data)
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance
