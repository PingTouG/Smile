import React, { createRef, ReactElement, useEffect, useState } from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom'
import { Form, Input, Checkbox, Button, Image } from 'antd'
import logo from '../../assets/images/logo.png'
import { isRequired, min } from '../../utils/rules'
import { LoginParams } from '../../types'
import { login } from '../../api/user'
import md5 from 'md5'
import storage, { USER_KEY, TOKEN_KEY, REMEMBER_KEY } from '../../utils/storage'
import { FormInstance } from 'antd/lib/form'

function Login(): ReactElement {
  const router = useHistory()
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  }
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  }
  const formRef = createRef<FormInstance>()

  useEffect(() => {
    const remember = storage.get(REMEMBER_KEY)
    if (remember) {
      formRef.current?.setFieldsValue(remember)
    }
  })

  const [loading, setLoading] = useState(false)
  const onSubmit = async (values: LoginParams) => {
    try {
      const payload = { ...values }
      payload.password = md5(payload.password)
      setLoading(true)
      const { user, token } = await login(payload)
      setLoading(false)
      // 记住密码
      if (values.remember) {
        storage.set(REMEMBER_KEY, values)
      } else {
        storage.remove(REMEMBER_KEY)
      }
      storage.set(USER_KEY, user)
      storage.set(TOKEN_KEY, token)
      router.push('/')
    } catch {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="page__header">
        <Image className="page__logo" src={logo} />
        <h3 className="page__title">Smile商城管理系统</h3>
      </div>
      <div className="page__container">
        <div className="page__form">
          <Form
            {...layout}
            ref={formRef}
            requiredMark={false}
            onFinish={onSubmit}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[isRequired('请输入账号')]}
            >
              <Input placeholder="请输入账号" autoFocus />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[isRequired('请输入密码'), min()]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={loading} block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
