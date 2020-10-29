import { isNull } from '../tools'

export const USER_KEY = 'SMILE_WEB_USER_INFO'
export const TOKEN_KEY = 'SMILE_WEB_TOKEN'
export const LAST_PAGE_KEY = 'SMILE_WEB_LAST_PAGE'

export default {
  get: key => {
    const data = window.localStorage.getItem(key)
    try {
      return JSON.parse(data)
    } catch {
      return data
    }
  },
  set: (key, data) => {
    if (!isNull(key) && !isNull(data)) {
      let payload = data

      if (typeof data !== 'string') {
        payload = JSON.stringify(data)
      }

      window.localStorage.setItem(key, payload)
    }
  },
  remove: key => window.localStorage.removeItem(key)
}
