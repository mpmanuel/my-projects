import logo from "./logo.svg"
import "./App.css"
import MyProjects from "./components/MyProjects/MyProjects"
import Pomodoro from "./components/Pomodoro/Pomodoro"
import Authentication from "./components/Authentication/Authentication"
import Markdown from "./components/Markdown/Markdown"
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
        <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/Pomodoro">Pomodoro</Link>
         </li>
         <li>
           <Link to="/Markdown">Markdown</Link>
         </li>
         <li>
           <Link to="/Authentication">Authentication</Link>
         </li>
        </ul>

        <Switch>
          
          
          <Route path="/pomodoro">
            <Pomodoro/>
          </Route>
          <Route path="/markdown">
            <Markdown/>
          </Route>
          <Route path="/authentication">
            <Authentication/>
          </Route>
          
          <Route path="/" exact={true}>
            <MyProjects/>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App