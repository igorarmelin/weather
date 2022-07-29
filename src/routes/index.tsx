import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../pages'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
