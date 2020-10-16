const key = "SMILE_WEB_TOKEN"

export default {
    set: token => window.localStorage.setItem(key,token),
    get: () =>  window.localStorage.getItem(key),
    remove: () => window.localStorage.removeItem(key)
}