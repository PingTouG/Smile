import BMap from 'BMap'

const MAP_STATUS = {
  // 检索成功
  BMAP_STATUS_SUCCESS: 0,
  // 城市列表
  BMAP_STATUS_CITY_LIST: 1,
  // 位置结果未知
  BMAP_STATUS_UNKNOWN_LOCATION: 2,
  // 导航结果未知
  BMAP_STATUS_UNKNOWN_ROUTE: 3,
  // 非法密钥
  BMAP_STATUS_INVALID_KEY: 4,
  // 非法请求
  BMAP_STATUS_INVALID_REQUEST: 5,
  // 没有权限
  BMAP_STATUS_PERMISSION_DENIED: 6,
  // 服务不可用
  BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
  // 超时
  BMAP_STATUS_TIMEOUT: 8
}

// 获取当前定位
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    const geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition(function(res) {
      const status = this.getStatus()
      if (status == MAP_STATUS.BMAP_STATUS_SUCCESS) {
        resolve(res)
      } else {
        reject(status)
      }
    })
  })
}

// 根据坐标获取位置
export const getLocationAddress = (lng, lat) => {
  return new Promise(resolve => {
    const point = new BMap.Point(lng, lat)
    const gc = new BMap.Geocoder()
    gc.getLocation(point, resolve)
  })
}

// 计算坐标点距离
export const getDistance = (a, b) => {
  const map = new BMap.Map('')
  const pointA = new BMap.Point(parseFloat(a.lng), parseFloat(a.lat))
  const pointB = new BMap.Point(parseFloat(b.lng), parseFloat(b.lat))
  const distance = (map.getDistance(pointA, pointB) / 1000).toFixed(2)
  return distance
}
