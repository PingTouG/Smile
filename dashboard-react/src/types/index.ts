import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'
import {
  FunctionComponent,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'

export interface LoginParams {
  username: string
  password: string
  remember: boolean | undefined
}

export interface MenuItem {
  path: string
  text?: string
  Icon?: ForwardRefExoticComponent<
    AntdIconProps & RefAttributes<HTMLSpanElement>
  >
}

export interface Router {
  path: string
  component: FunctionComponent
  exact?: boolean
  routes?: Array<any>
  meta?: any
}
