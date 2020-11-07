import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <Router basename="/admin">
    <Switch>
      {router}
    </Switch>
  </Router>
  );
}

export default App
