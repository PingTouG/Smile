import React, { ReactElement, useEffect, useState } from 'react'
import './index.scss'
import routes from '../router/routes'
import { renderRoutes, RouteConfig } from 'react-router-config'
import AuthRouter from './components/AuthRouter'
import { Layout, Image } from 'antd'
import Logo from '../assets/images/logo.png'
import TheMenu from './components/TheMenu'
import TheBreadcrumb from './components/TheBreadcrumb'
import { useHistory } from 'react-router-dom'
import { MenuInfo } from '../types'
import { activePathAtom, breadcrumbsAtom } from '../store/app'
import { useRecoilState } from 'recoil'
import { getBreadcrumbs } from '../utils/tools'

const { Header, Sider, Content } = Layout

function BasicsLayout(): ReactElement {
  const router = useHistory()
  const [active, setActive] = useRecoilState(activePathAtom)
  const [breadcrumbs, setBreadcrumbs] = useRecoilState(breadcrumbsAtom)
  const locationPath = window.location.pathname

  const activePath = active || locationPath.replace('/admin', '')
  const [selectedKeys, setSelectedKeys] = useState([activePath])
  const [openKeys, setOpenKeys] = useState([] as Array<string>)

  const onMenuClick = ({ key }: MenuInfo) => {
    // 设置菜单高亮
    setActive(key as string)
    // 设置面包屑
    const routeList = routes.filter((item) => item.path === key)

    if (routeList.length > 0) {
      setBreadcrumbs(getBreadcrumbs(routeList))
    }

    router.push(key as string)
  }

  // 打开多级菜单
  const onOpenChange = (openKeys: Array<string | number>) => {
    const keys = getOpenKeys(openKeys.pop() as string)
    setOpenKeys(keys)
  }
  // 获取openKeys
  const getOpenKeys = (path: string) => {
    const openKeysRoute: RouteConfig | undefined = routes.find(
      (item) => item.path !== '/' && path.includes(item.path as string)
    )

    let openKeys: Array<string> = []

    if (
      openKeysRoute &&
      openKeysRoute.routes &&
      openKeysRoute.routes.length > 0
    ) {
      openKeys = [openKeysRoute[0].path]
    }

    return openKeys
  }

  useEffect(() => {
    let locationPath = window.location.pathname
    locationPath = locationPath.replace('/admin', '')

    // 设置菜单高亮
    setSelectedKeys([locationPath])

    // 设置当前打开菜单组
    const openKeys = getOpenKeys(locationPath)
    setOpenKeys(openKeys)

    // 设置面包屑
    const route = routes.filter((item) => item.path === locationPath)
    if (route.length > 0) {
      setBreadcrumbs(getBreadcrumbs(route))
    }
  }, [window.location.pathname])

  return (
    <AuthRouter>
      <Layout className="layout">
        <Sider className="layout__sider">
          <div className="layout__sider-header">
            <Image
              height="40px"
              width="40px"
              className="layout__logo"
              src={Logo}
            />
            <h3 className="layout__title">Smile商城</h3>
          </div>
          <TheMenu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            routes={routes}
            onOpenChange={onOpenChange}
            onClick={onMenuClick}
          />
        </Sider>
        <Layout className="layout__site-layout">
          <Header className="layout__header"></Header>
          <Content className="layout__content">
            <TheBreadcrumb breadcrumbs={breadcrumbs} />
            <div>{renderRoutes(routes)}</div>
          </Content>
        </Layout>
      </Layout>
    </AuthRouter>
  )
}

export default BasicsLayout
