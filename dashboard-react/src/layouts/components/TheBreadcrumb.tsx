import React, { ReactElement } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { MetaBreadcrumb } from '../../types'

function TheBreadcrumb({
  breadcrumbs,
}: {
  breadcrumbs: Array<MetaBreadcrumb>
}): ReactElement {
  return (
    <Breadcrumb>
      {breadcrumbs.map((item: MetaBreadcrumb, index: number) => {
        return (
          <Breadcrumb.Item key={item.text}>
            {Number(index) !== breadcrumbs.length - 1 && item.path ? (
              <Link to={item.path}>{item.text}</Link>
            ) : (
              item.text
            )}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default TheBreadcrumb
