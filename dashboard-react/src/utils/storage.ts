import { isNull } from './tools'

export const USER_KEY = 'SMILE_ADMIN_USER_INFO'
export const TOKEN_KEY = 'SMILE_ADMIN_TOKEN'
export const LAST_PAGE_KEY = 'SMILE_ADMIN_LAST_PAGE'
export const REMEMBER_KEY = 'REMEMBER_KEY'

const storage = {
  get: (key: string): unknown | null => {
    const data = window.localStorage.getItem(key)

    try {
      if (data !== null) {
        return JSON.parse(data)
      } else {
        return null
      }
    } catch {
      return data
    }
  },
  set: (key: string, data: unknown): void => {
    if (!isNull(key) && !isNull(data)) {
      if (typeof data !== 'string') {
        window.localStorage.setItem(key, JSON.stringify(data))
      } else {
        window.localStorage.setItem(key, data)
      }
    }
  },
  remove: (key: string): void => window.localStorage.removeItem(key),
}

export default storage
