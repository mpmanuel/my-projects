import React from 'react';
import styled, { css } from "styled-components"

export default function Home() {
    return <div>I am the Home Page</div>; 
}

const StyledDivHome = styled.div`
  background-color: rgba(157,128,238,1);
  max-width: 50%;
  padding-top: 50px;
  padding-left: 50px;
  padding-bottom: 10px;
  border-radius: 25px;
  height: 200px;
`