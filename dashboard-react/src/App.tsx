import React, { ReactElement, Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import { Spin } from 'antd'
import './styles/app.scss'
import { RecoilRoot } from 'recoil'

function App(): ReactElement {
  return (
    <RecoilRoot>
      <Router basename="/admin">
        <Suspense fallback={<Spin />}>
          <Switch>{router}</Switch>
        </Suspense>
      </Router>
    </RecoilRoot>
  )
}

export default App
