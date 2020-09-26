import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from '~Screens/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
    </Switch>
  )
}

export default Routes
