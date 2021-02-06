import React, { PureComponent } from 'react';
import styled from 'styled-components'

export default class Separate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SeparateContainer />
    );
  }
}


const SeparateContainer = styled.div`
    width: 100%;
    border-top: 0.1px solid #8A8A8A;
    opacity: 0.5;
    margin-top: 13px;
`