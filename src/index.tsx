import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from 'styled-components'

const rootEl = document.getElementById("root");

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background:#0A0000;
  }
  body{
    display:flex;
    height:99%;
    width:100%;

    #root{
      display:flex;
      flex:1;
      align-items: center;
      justify-content: center;
    }
  }
`

render( 
      <>
      <GlobalStyle/>
      <App />
      </>
  , rootEl);
