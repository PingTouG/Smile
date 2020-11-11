import React, { ReactElement } from 'react'
import './index.scss'
import routes from '../router/routes'
import { renderRoutes } from 'react-router-config'
import AuthRouter from './components/AuthRouter'
import { Layout, Image } from 'antd'
import Logo from '../assets/images/logo.png'

const { Header, Sider, Content } = Layout

function BasicsLayout(): ReactElement {
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
        </Sider>
        <Layout className="layout__site-layout">
          <Header className="layout__header"></Header>
          <Content>
            <div>{renderRoutes(routes)}</div>
          </Content>
        </Layout>
      </Layout>
    </AuthRouter>
  )
}

export default BasicsLayout
