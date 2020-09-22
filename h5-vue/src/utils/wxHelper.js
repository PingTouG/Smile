import wx from 'jweixin-module'
import { getQuery } from '@/utils/tools'

/**
 * 微信网页授权
 * @param {string} URL
 * @param {boolean} isSilent 是否静默授权，默认：false
 */
export const wxAuthorize = ({
  appID,
  URL = window.location.href,
  isSilent = false
}) => {
  if (!appID) {
    console.warn('微信网页授权需要appID')
    return false
  }

  const query = getQuery(URL)
  // 授权之后url会携带code
  if ('code' in query) {
    const payload = { code: query.code, appID }
    return payload
  }

  let URI = encodeURIComponent(URL)
  const scope = isSilent ? 'snsapi_base' : 'snsapi_userinfo'
  const state = isSilent ? '123' : 'STATE'
  const authURL = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=${URI}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
  window.location.href = authURL
}

// 微信配置
export const wxConfig = ({
  appId,
  timestamp,
  nonceStr,
  signature,
  jsApiList = []
}) => {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr, // 必填，生成签名的随机串
    signature, // 必填，签名
    jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
}
