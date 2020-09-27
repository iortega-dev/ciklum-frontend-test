import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// Screens import
import NotFoundScreen from '~Screens/404'
import EuroJackpotScreen from '~Screens/Eurojackpot'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/ciklum-frontend-test/" render={() => <Redirect to="/ciklum-frontend-test/eurojackpot/" />} />
      <Route path="/ciklum-frontend-test/eurojackpot/:drawndate" component={EuroJackpotScreen} />
      <Route path="/ciklum-frontend-test/eurojackpot/" component={EuroJackpotScreen} />
      <Route component={NotFoundScreen}/>
    </Switch>
  )
}

export default Routes
