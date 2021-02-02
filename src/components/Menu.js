import React from 'react';
import styled from 'styled-components'
// import {User} from '@@styled-icons/fa-regular/User'
import { Phone } from '@styled-icons/boxicons-regular'
import { Person } from '@styled-icons/bootstrap/Person'
import { Tools } from '@styled-icons/octicons/Tools'
import { Bag } from '@styled-icons/ionicons-outline/Bag'
import { Book } from '@styled-icons/bootstrap/Book'
import { CloudDownload } from '@styled-icons/boxicons-regular/CloudDownload'

const Menu = ({ children }) => (
  <>
    <Top>
      {/* <Language id='icon-menu' /> */}
    </Top>

    <Container>
      <Person id='icon-menu' />
      <Book id='icon-menu' />
      <Tools id='icon-menu' />
      <Bag id='icon-menu' />
      <Phone id='icon-menu' />
    </Container>
    <Down>
       <CloudDownload id='icon-menu'/>
    </Down>
  </>
);


const Container = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #icon-menu { 
    width:30px;
    padding:20px;
    color:#8A8A8A;

    &:hover{
      color:#029264
    }
  }
`

const Top = styled.div`
  background-color:#00B479;
  flex:0.3;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  }
`;

const Down = styled.div`
  
  flex:0.1;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;

  #icon-menu { 
    width:33px;
    padding:20px;
    color:#8A8A8A;

    &:hover{
      color:#029264
    }
  }
`



export default Menu;
