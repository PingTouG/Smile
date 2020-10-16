const key = "SMILE_WEB_USER_INFO"

const set = payload => {
    const userInfo = JSON.parse(payload ?? null)
    window.localStorage.setItem(key,userInfo)
}

const get = () => {
    const userInfo = window.localStorage.getItem(key)
    return JSON.stringify(userInfo ?? undefined)
}

const remove = () => window.localStorage.removeItem(key)

export default {
    set,
    get,
    remove
}