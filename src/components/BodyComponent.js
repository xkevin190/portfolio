import React, { Component } from 'react';
import styled from 'styled-components'
import Separate from './Separate'
export default class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ContainerBody>
        <h1 id="header-title"> Sobre mi </h1>

        <div id='subtitle-container'>
          <span id='subtitle-info'>26 años</span>
          <span id='subtitle-separator'>/</span>
          <span id='subtitle-info'> Venezolano</span >
        </div >

        <div id='body-info1' >
          <span class="text-style">
            I am a person who loves technology with great desire to learn more every day. I believe in commitment and hard work, with great ability to solve problems.
          </span  >
          <span class="text-style">
            I have 4 years of work experience developing mostly as a web developer in JavaScript, working with technologies such as NodeJS, ReactJS, Firebase and MongoDB.
          </span>
          <span class="text-style">
            In the last year I have focused on working in mobile development, mainly I have used React Native as well as in the creation of native modules in Java and Swift.
          </span>
        </div>

        <Separate />
      </ContainerBody >
    );
  }
}


const ContainerBody = styled.div`
    display: flex;
    flex: 1;
    padding: 0 5px 0 35px;
    flex-direction: column;

    #header-title{
      color: white;
      font-weight: 900;
      font-size: 70px;
      margin-bottom: 20px;
      margin-top: 40px;

    }


    #subtitle-container{
      align-items: center;
      display: flex;
    }

    #subtitle-info{
       color:#0091ea;  
       font-size:20px
    }

    .text-style{
      color:#8A8A8A;
      line-height:1.73;
      padding-bottom:10px;
      display:block;
    }

    #body-info1{
      margin-top:20px
    }

    #subtitle-separator{
      color:#8A8A8A;
      padding-left:5px;
      padding-right:5px;
      font-weight:bold;
      font-size:20px
    }
`