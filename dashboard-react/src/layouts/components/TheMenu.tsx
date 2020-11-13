import React, { ReactElement } from 'react'
import { Menu } from 'antd'
import { SMenuProps, SRouteConfig } from '../../types'
import { RouteConfig } from 'react-router-config'

// 获取菜单项
const getMenuItem = ({ path, text, Icon }: RouteConfig) => (
  <Menu.Item key={path as string}>
    {Icon && <Icon />}
    <span>{text || ''}</span>
  </Menu.Item>
)

// 获取多级菜单
const getMenu = ({ path, routes, meta }: SRouteConfig) => {
  let MenuComponent = null

  if (meta && meta.menu) {
    if (meta.menu.noRender) {
      return MenuComponent
    }

    const { text, Icon } = meta.menu
    // 递归获取多级菜单
    if (routes && routes.length > 0) {
      const menuChild = routes.map(getMenu)

      if (menuChild.length > 0) {
        MenuComponent = (
          <Menu.SubMenu
            key={path as string}
            title={
              <span>
                {Icon && <Icon />}
                {text || ''}
              </span>
            }
          >
            {menuChild}
          </Menu.SubMenu>
        )
      } else {
        MenuComponent = getMenuItem({ path, text, Icon })
      }
    } else {
      MenuComponent = getMenuItem({ path, text, Icon })
    }
  }

  return MenuComponent
}

const TheMenu = (props: SMenuProps): ReactElement => {
  return (
    <Menu theme="dark" mode="inline" {...props}>
      {props.routes.map((menu: SRouteConfig) => getMenu(menu))}
    </Menu>
  )
}

export default TheMenu
