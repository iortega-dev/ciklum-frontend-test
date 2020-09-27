import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// Screens import
import NotFoundScreen from '~Screens/404'
import EuroJackpotScreen from '~Screens/Eurojackpot'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/eurojackpot" />} />
      <Route path="/eurojackpot/:drawndate" component={EuroJackpotScreen} />
      <Route path="/eurojackpot" component={EuroJackpotScreen} />
      <Route component={NotFoundScreen}/>
    </Switch>
  )
}

export default Routes
