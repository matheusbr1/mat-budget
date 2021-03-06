import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default Routes