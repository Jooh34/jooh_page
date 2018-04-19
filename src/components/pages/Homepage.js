import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import styled from 'styled-components';

import img from '../../assets/images/bg.jpg';

const Welcome = styled.div`

  height : 500px
  font-size: 1.5em;
  color: White;
  background-image : url(${img});
  background-repeat : no-repeat;
  background-size : cover;
  opacity : 0.8;
`;

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>
          Home page
        </h2>
      </div>
    );
  }
}

export default Homepage;
