import React from "react"
import Tab from "./Tab"
import Home from "./Home"
import About from "./About"
import Features from "./Features"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"
import "./BrowserTabs.css"

function App() {
  return (
    <div className="broswertab">
      <Router>
        <div className="app">
          <div className="browser">
            <div className="tabs">
              <Tab>
                <NavLink
                  to="/browsertab"
                  activeClassName="is-active"
                  exact={true}
                  style={{ width: "200px" }}
                >
                  Home
                </NavLink>
              </Tab>
              <Tab>
                <NavLink
                  to="/browsertab/about"
                  activeClassName="is-active"
                  style={{ width: "200px" }}
                >
                  About
                </NavLink>
              </Tab>
              <Tab>
                <NavLink
                  to="/browsertab/features"
                  activeClassName="is-active"
                  style={{ width: "200px" }}
                >
                  Features
                </NavLink>
              </Tab>
            </div>

            <div className="viewport">
              <Switch>
                <Route path="/browsertab/about">
                  <About />
                </Route>
                <Route path="/browsertab/features">
                  <Features />
                </Route>
                <Route path="/browsertab" exact={true}>
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
