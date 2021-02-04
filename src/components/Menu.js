import React from 'react';
import styled from 'styled-components'
// import {User} from '@@styled-icons/fa-regular/User'
import { Phone } from '@styled-icons/boxicons-regular'
import { Person } from '@styled-icons/bootstrap/Person'
import { Tools } from '@styled-icons/octicons/Tools'
import { Bag } from '@styled-icons/ionicons-outline/Bag'
import { Book } from '@styled-icons/bootstrap/Book'
import { CloudDownload } from '@styled-icons/boxicons-regular/CloudDownload'

const img = require('../assets/img/1612410527606.jpg')
const Menu = ({ children, setMenuOptions, button }) => (
  <>
    <Top/>
    <Container>
      <Person id='icon-menu'
        className={`${button === 1 ? 'icon-active' : ''}`}
        active={button === 1 ? true : false}
        onClick={() => setMenuOptions(1)}
      />
      <Book id='icon-menu'
        className={`${button === 2 ? 'icon-active' : ''}`}
        active={button === 2 ? true : false}
        onClick={() => setMenuOptions(2)}
      />
      <Tools id='icon-menu'
        className={`${button === 3 ? 'icon-active' : ''}`}
        active={button === 3 ? true : false}
        onClick={() => setMenuOptions(3)}
      />
      <Bag id='icon-menu'
        className={`${button === 4 ? 'icon-active' : ''}`}
        active={button === 4 ? true : false}
        onClick={() => setMenuOptions(4)}
      />
      <Phone id='icon-menu'
        className={`${button === 5 ? 'icon-active' : ''}`}
        active={button === 5 ? true : false}
        onClick={() => setMenuOptions(5)}
      />
    </Container>
    <Down>
      <CloudDownload id='icon-menu' />
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
    cursor: pointer;

    &:hover{
      color:#0091ea
    }
  }

  .icon-active {
    color:#0091ea !important;
  }
`

const Top = styled.div`
  background-color:#0091ea;
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
    cursor: pointer;
    color:#8A8A8A;

    &:hover{
      color:#0091ea
    }
  }
`



export default Menu;
