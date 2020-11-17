import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'
import { MenuProps } from 'antd/lib/menu'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { RouteConfig } from 'react-router-config'

export interface LoginParams {
  username: string
  password: string
  remember: boolean | undefined
}

export interface SMenuProps extends MenuProps {
  routes: Array<SRouteConfig>
}

export interface SRouteConfig extends RouteConfig {
  meta?: Meta
}

export interface Meta {
  menu?: MetaMenu
  breadcrumb?: Array<MetaBreadcrumb>
}

export interface MetaMenu {
  text: string
  Icon?: ForwardRefExoticComponent<
    AntdIconProps & RefAttributes<HTMLSpanElement>
  >
  noRender?: boolean
  active?: string
}

export interface MetaBreadcrumb {
  text: string
  path?: string
}

export interface SMenuItemProps {
  path: string
  text: string
  Icon?: ForwardRefExoticComponent<
    AntdIconProps & RefAttributes<HTMLSpanElement>
  >
}

export interface MenuInfo {
  key: React.Key
  keyPath: React.Key[]
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement>
}
