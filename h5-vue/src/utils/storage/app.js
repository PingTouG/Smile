const key = 'SMILE_WEB_LAST_PAGE'

export default {
  set: lastPage => window.localStorage.setItem(key, lastPage),
  get: () => window.localStorage.getItem(key),
  remove: () => window.localStorage.removeItem(key)
}
