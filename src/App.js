import logo from "./logo.svg"
import "./App.css"
import MyProjects from "./components/MyProjects/MyProjects"
import Pomodoro from "./components/Pomodoro/Pomodoro"
import Authentication from "./components/Authentication/Authentication"
import Markdown from "./components/Markdown/Markdown"
import BrowserTab from "./components/BrowserTabs/BrowserTabs"
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors"
import MoveLink from "./components/MoveLink/MoveLink"
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll"
import Trivia from "./components/Trivia/Trivia"
import WebSpeechTimer from "./components/WebSpeechTimer/WebSpeechTimer"
import Calendar from "./components/Calendar/Calendar"
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import styled, { css } from "styled-components"

function App() {
  return (
    <div className="App">
      <Router>
        <StyledUl>
        <StyledLiTop>
           <Link to="/">Home</Link>
         </StyledLiTop>
         <li>
           <Link to="/Pomodoro">Pomodoro</Link>
         </li>
         <li>
           <Link to="/Markdown">Markdown</Link>
         </li>
         <li>
           <Link to="/BrowserTab">broswerTab</Link>
         </li>
         <li>
           <Link to="/RockPaperScissors">RockPaperScissors</Link>
         </li>
         <li>
           <Link to="/MoveLink">MoveLink</Link>
         </li>
         <li>
           <Link to="/InfiniteScroll">InfiniteScroll</Link>
         </li>
         <li>
           <Link to="/Trivia">Trivia</Link>
         </li>
         <li>
           <Link to="/WebSpeechTimer">WebSpeechTimer</Link>
         </li>
         <li>
           <Link to="/Authentication">Authentication</Link>
         </li>
         <StyledLiBottom>
           <Link to="/Calendar">Calendar</Link>
         </StyledLiBottom>
        </StyledUl>

        <Switch>
          
          
          <Route path="/pomodoro">
            <Pomodoro/>
          </Route>
          <Route path="/markdown">
            <Markdown/>
          </Route>
          <Route path="/browsertab">
            <BrowserTab/>
          </Route>
          <Route path="/RockPaperScissors">
            <RockPaperScissors/>
          </Route>
          <Route path="/movelink">
            <MoveLink/>
          </Route>
          <Route path="/infinitescroll">
            <InfiniteScroll/>
          </Route>
          <Route path="/trivia">
            <Trivia/>
          </Route>
          <Route path="/webspeechtimer">
            <WebSpeechTimer/>
          </Route>
          <Route path="/authentication">
            <Authentication/>
          </Route>
          <Route path="/calendar">
            <Calendar/>
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

const StyledUl = styled.ul`
  list-style-type: square;
  background-color: rgb(36, 221, 144);
  border-radius: 25px;
`
const StyledLiTop = styled.li`
  padding-top: 30px;
`
const StyledLiBottom = styled.li`
  padding-bottom: 30px;
`