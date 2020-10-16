const key = 'SMILE_WEB_USER_INFO'

const set = payload => {
  const userInfo = JSON.stringify(payload ?? undefined)
  window.localStorage.setItem(key, userInfo)
}

const get = () => {
  const userInfo = window.localStorage.getItem(key)
  return JSON.payload(userInfo ?? null)
}

const remove = () => window.localStorage.removeItem(key)

export default {
  set,
  get,
  remove
}
