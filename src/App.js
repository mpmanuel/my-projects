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
         <StyledLi>
           <Link to="/Pomodoro">Pomodoro: A timer app</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/Markdown">Markdown: Converts markdown</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/BrowserTab">broswerTab: A sample of browser tabs</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/RockPaperScissors">RockPaperScissors: A game of RPS with the computer</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/MoveLink">MoveLink: Use arrow keys or buttons to move link</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/InfiniteScroll">InfiniteScroll: Scrolling gallery using Unsplash</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/Trivia">Trivia: A trivia game with multiple categories</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/WebSpeechTimer">WebSpeechTimer: *** Needs a supported browser for speech function ***</Link>
         </StyledLi>
         <StyledLi>
           <Link to="/Authentication">Authentication: An authentication page using Auth0</Link>
         </StyledLi>
         <StyledLiBottom>
           <Link to="/Calendar">Calendar: Click dates to change the calendar range</Link>
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const StyledLiBottom = styled.li`
  padding-bottom: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const StyledLi = styled.li`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`