import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import {Spin} from './antd'

function App() {
  return (
    <Router basename="/admin">
      <Suspense fallback={<Spin />}>
        <Switch>
          {router}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App
