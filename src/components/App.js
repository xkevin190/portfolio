import * as React from "react";
import { hot } from "react-hot-loader";
import styled from 'styled-components'
import Menu from './Menu'
const reactLogo = require("./../assets/img/niko_img.jpg");
import { Twitter } from '@styled-icons/bootstrap/Twitter'
import { Github } from '@styled-icons/bootstrap/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <MenuBar style={{ color: 'white' }}>
          <Menu />
        </MenuBar>
        <CardInfo style={{ color: 'white' }}>
          <div id='conten-profile'>
            <span id='title'>Kevin Velasco</span>
            <span id='subtitle'>Developer</span>
            <div id="social-media">
              <a href="#"><Twitter width={30} /></a>
              <a href="#"><Github width={30} /></a>
              <a href="#"><LinkedinSquare width={30} /></a>
            </div>
          </div>
        </CardInfo>
        <BodyCard style={{ color: 'white' }}>component3</BodyCard>
      </AppContainer>
    );
  }
}


const AppContainer = styled.div`
    align-items: center;
    justify-content: center;
    width:70%;
    display:flex;
    flex-direction: row;
`


const MenuBar = styled.div`
    flex:0.2;
    min-height:75vh;
    background-color: #191A1C;
    flex-direction:column;
    display: flex;
    align-items:center;
    justify-content:space-between;
`

const CardInfo = styled.div`
    flex:1.5;
    background-image: url('https://n.foxdsgn.com/niko/black/wp-content/uploads/sites/4/2019/03/niko_img.jpg');
    height:85vh;
    z-index:30;
    box-shadow: 0px 3px 17px -4px rgba(0,0,0,0.75);
    display:flex;
    align-items:flex-end;

      #conten-profile{
        height:25vh;
        z-index:50;
        width:100%;
        justify-content:space-evenly;
        display:flex;
        align-items:center;
        flex-direction:column        
      }

      #title{
        font-size:40px;

      }

      #subtitle {
        color:#00C483;
        font-size:20px
      }

      a{
        color: #FFFFFF;
        text-decoration:none;
        padding-left:10px;
        padding-right:10px;
      }

`

const BodyCard = styled.div`
    flex:2;
    background-color: #1B1E20;
    height:75vh;
    transition: width 2s;
`

export default hot(module)(App);
