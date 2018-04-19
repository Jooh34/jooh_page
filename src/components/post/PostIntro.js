import React, { Component } from 'react';
import styled from 'styled-components';

import { Image } from 'semantic-ui-react'

class PostIntro extends Component {
  render() {
    return (
      <Image src= {require('../../assets/images/bg.jpg')} fluid />
    );
  }
}

export default PostIntro;
