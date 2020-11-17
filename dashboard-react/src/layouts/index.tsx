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
import { path } from '../store/app'
import { useRecoilState } from 'recoil'

const { Header, Sider, Content } = Layout

function BasicsLayout(): ReactElement {
  const router = useHistory()
  const [active, setActive] = useRecoilState(path)
  const locationPath = window.location.pathname

  const activePath = active || locationPath.replace('/admin', '')
  const [selectedKeys, setSelectedKeys] = useState([activePath])
  const [openKeys, setOpenKeys] = useState([] as Array<string>)

  const onMenuClick = ({ key }: MenuInfo) => {
    // 设置菜单高亮
    setActive(key as string)
    router.push(key as string)
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
    // 设置菜单高亮
    setSelectedKeys([activePath])

    // 设置当前打开菜单组
    const openKeys = getOpenKeys(locationPath.replace('/admin', ''))
    setOpenKeys(openKeys)
  }, [activePath])

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
            onClick={onMenuClick}
          />
        </Sider>
        <Layout className="layout__site-layout">
          <Header className="layout__header"></Header>
          <Content className="layout__content">
            <TheBreadcrumb />
            <div>{renderRoutes(routes)}</div>
          </Content>
        </Layout>
      </Layout>
    </AuthRouter>
  )
}

export default BasicsLayout
