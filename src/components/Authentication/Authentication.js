import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SiteHeader from "./SiteHeader"
import Dashboard from "./Dashboard"
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"
import "./Authentication.css"
import { Auth0Client } from "@auth0/auth0-spa-js"
import { UseAuth0 } from "./auth0-context"

//dev-6gpit8rv.us.auth0.com
//xFS8zilWgRXc6K7GNerqYVtyrlpr3kRW

export default function App() {
  const auth0 = UseAuth0()

  return (
    <div className="auth">
      <Router>
        <div className="app">
          {/* site header */}
          <SiteHeader />

          {/* routes */}
          <Switch>
            <PrivateRoute path="/authentication/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/authentication" exact={true}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
