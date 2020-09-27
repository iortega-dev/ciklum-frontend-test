import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import EuroJackpotScreen from '~Screens/Eurojackpot'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/eurojackpot" />} />
      <Route path="/eurojackpot/:drawndate" component={EuroJackpotScreen} />
      <Route path="/eurojackpot" component={EuroJackpotScreen} />
    </Switch>
  )
}

export default Routes
