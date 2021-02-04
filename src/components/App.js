import * as React from "react";
import { hot } from "react-hot-loader";
import styled from 'styled-components'
import Menu from './Menu'
const reactLogo = require("./../assets/img/niko_img.jpg");
import { Twitter } from '@styled-icons/bootstrap/Twitter'
import { Github } from '@styled-icons/bootstrap/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

const img = require('../assets/img/1612410527606.jpg').default
const audio = require('../assets/audio.mp3').default
console.log(audio)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      button: 1
    };

    this.audio = new Audio(audio);

  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        active: false
      })
    }, 100)
  }


  setMenuOptions = (num) => {
    
    this.audio.play()
    this.setState({
      button: num,
      active: true
    })
  }


  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.button !== prevState.button) {
      setTimeout(() => {
        this.setState({
          active: false
        })
      }, 500)
    }
  }




  render() {
    return (
      <AppContainer>
        <MenuBar style={{ color: 'white' }}>
          <Menu setMenuOptions={this.setMenuOptions} button={this.state.button} />
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
        <BodyCard active={this.state.active} >
          <div id="inside-body">
            hello word
          </div>
        </BodyCard>
        <div style={{
          background: '#0A0000',
          position: "absolute",
          zIndex: 2,
          width: '50vh',
          height: '100vh',
          left: '0vh'
        }} />
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
    z-index:3;
`

const CardInfo = styled.div`
    flex:1.5;
    background-image: url(${img});
    background-size: 100% 100%;
    height:85vh;
    z-index:30;
    box-shadow: 0px 3px 17px -4px rgba(0,0,0,0.75);
    display:flex;
    align-items:flex-end;

      #conten-profile{
        height:20vh;
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
        color:#0091ea;
        font-size:20px
      }

      a{
        color: #FFFFFF;
        text-decoration:none;
        padding-left:10px;
        padding-right:10px;
      }

`;

const BodyCard = styled.div`
    flex: 2;
    height:75vh;

    #inside-body {
      height:100%;
      width:100% ;
      background-color: #1B1E20;
      transition: 0.5s all;
      transform: ${props => props.active ? "translateX(-100%)" : "translateX(0%)"};
    }
`;

export default hot(module)(App);
