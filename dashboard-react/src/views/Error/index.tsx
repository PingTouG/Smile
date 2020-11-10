import React, { ReactElement } from 'react'
import './index.scss'
import { Image } from 'antd'
import notFound from '../../assets/images/404.png'
import notAuth from '../../assets/images/401.png'
import { HomeOutlined, RollbackOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

function Error(props: any): ReactElement {
  const {
    route: {
      meta: { code },
    },
  } = props

  const history = useHistory()

  let img = notFound
  switch (code) {
    case 401:
      img = notAuth
      break
    case 404:
      img = notFound
      break
  }

  return (
    <div className="error">
      <Image src={img} preview={false} />
      <div className="error__back">
        <span className="error__back-item" onClick={() => history.push('/')}>
          <HomeOutlined /> 返回首页
        </span>
        <span className="error__back-item" onClick={() => history.goBack()}>
          <RollbackOutlined /> 返回上一页
        </span>
      </div>
    </div>
  )
}

export default Error
