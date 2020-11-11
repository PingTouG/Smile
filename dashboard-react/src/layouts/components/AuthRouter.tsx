import React from 'react'
import { useHistory, withRouter, Redirect } from 'react-router-dom'

import storage, { TOKEN_KEY } from '../../utils/storage'

export default withRouter((props: any) => {
  const { children } = props
  const router = useHistory()
  const token = storage.get(TOKEN_KEY)

  if (!token) {
    router.push('/login')
  }

  if (router.location.pathname === '/') {
    return <Redirect to="/dashboard" />
  } else {
    return children
  }
})
