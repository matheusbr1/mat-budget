import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Forgot from '../pages/Forgot'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgot" exact component={Forgot} />
        <Route path="/dashboard" component={Dashboard} />
        
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}

export default Routes