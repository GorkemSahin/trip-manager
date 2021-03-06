import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TripList from '../pages/trip/list'
import TripDetails from '../pages/trip/details'
import NewTrip from '../pages/trip/new'

const Pages = () => (
  <Switch>
    <Route exact path="/trip" component={TripList} />
    <Route path="/trip/new" component={NewTrip} />
    <Route path="/trip/:id?" component={TripDetails} />
    <Route path="/">
      <Redirect to="/trip" />
    </Route>
  </Switch>
)

export default Pages
