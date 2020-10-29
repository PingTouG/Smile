/**
 * 更新网站标题
 * @param {string} title 标题
 */
export const updateTitle = title => {
  document.title = title
  // 微信内置浏览器处理
  if (isMobile && isWeChat) {
    var iframe = document.createElement('iframe')
    iframe.hidden = true
    iframe.onload = () => {
      setTimeout(() => {
        iframe.remove()
      }, 0)
    }

    document.body.appendChild(iframe)
  }
}

const userAgent = navigator.userAgent.toUpperCase()
// 是否为移动端
export const isMobile = userAgent.includes('MOBILE')
// 是否为微信内置浏览器
export const isWeChat = userAgent.includes('MICROMESSENGER')

// 解析url参数
export const getQuery = url => {
  const query = {}

  if (url.includes('?')) {
    const search = url.split('?')[1]
    if (search.includes('&')) {
      const params = search.split('&')
      params.forEach(item => {
        const [key, value] = item.split('=')
        query[key] = value
      })
    } else {
      const [key, value] = search.split('=')
      query[key] = value
    }
  }

  return query
}

// 是否为空
export const isNull = payload => payload === undefined || payload === null
