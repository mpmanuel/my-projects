import React from "react"
import styled, { css } from "styled-components"

export default function MyProjects() {
  return (
    <StyledDiv>
      <Styledp>
        Welcome to Mark Manuel's React Projects GitHub page.
        <br></br>
        Here are 10 projects that I worked on throughout a class
        <br></br>
        in order to demonstrate an understanding of react
        <br></br>
        fundementals and state. I hope you enjoy!
      </Styledp>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: rgb(60, 130, 240);
  border-radius: 25px;
`
const Styledp = styled.div`
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  position: relative;
  padding-top: 30px;
  padding-right: 50px;
  padding-bottom: 30px;
  padding-left: 50px;
`