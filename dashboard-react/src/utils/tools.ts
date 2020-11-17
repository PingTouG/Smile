import { RouteConfig } from 'react-router-config'
import { MetaBreadcrumb } from '../types'

// 是否为空
export const isNull = (payload: unknown): boolean =>
  payload === undefined || payload === null

/**
 * @method getBreadcrumbs
 * @description 获取面包屑
 * @param routes 路由
 * @returns 面包屑
 */
export const getBreadcrumbs = (
  routes: Array<RouteConfig>
): Array<MetaBreadcrumb> => {
  let breadcrumbs = []

  if (routes.length) {
    const route = routes[0]
    // 是否渲染
    const isRender = route.meta

    if (isRender) {
      // 是否渲染默认，menu的text存在且breadcrumb为true
      const isRenderDefault =
        route.meta.menu &&
        route.meta.menu.text &&
        (route.meta.breadcrumb === undefined ||
          (typeof route.meta.breadcrumb === 'boolean' && route.meta.breadcrumb))

      if (isRenderDefault) {
        breadcrumbs = [{ text: route.meta.menu.text }]
      }

      // 是否渲染配置
      const isRenderConfig =
        route.meta.breadcrumb instanceof Array && route.meta.breadcrumb.length

      if (isRenderConfig) {
        breadcrumbs = route.meta.breadcrumb
      }
    }
  }

  return breadcrumbs
}
