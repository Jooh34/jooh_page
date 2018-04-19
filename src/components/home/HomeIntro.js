import React, { Component } from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { Image } from 'semantic-ui-react'

import ylee_url from '../../assets/fonts/ylee.ttf';
import basketball_wallpaper from '../../assets/images/wallpaper/basketball.jpg';

injectGlobal`
  @font-face {
    font-family: 'ylee';
    src: url(${ylee_url}) format('truetype');
  }
`;

const Container = styled.div`
  background-image: url(${basketball_wallpaper});
  min-height: 600px;

  width: 100%;
  height : auto;
  background-size: cover;
  background-repeat: no-repeat;

  padding-top : 20px;
  padding-left : 20px;
`;

const Text4em = styled.h2`
  font-family : 'ylee';
  color: #dfdfdf;
  font-size : 4em;
  text-align : center;
`;

const Text6em = styled.h2`
  font-family : 'ylee';
  color: #dfdfdf;
  font-size : 6em;
  text-align : center;
`;

const WelcomeTextContainer = styled.div`
  float : top;
  margin-top : 50px;
  width : 60%;
`;

const IntroductionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width : 50%;
`;

const welcomeMessage = 'Welcome to Jooh\'s Page!'
const introMessage = 'Thank you for visiting my website!';

class HomeIntro extends Component {

  render() {
    return (
      <Container>
        <WelcomeTextContainer>
          <Text6em> {welcomeMessage} </Text6em>
        </WelcomeTextContainer>
        <IntroductionContainer>
          <Text4em> {introMessage} </Text4em>
        </IntroductionContainer>
      </Container>
    );
  }
}

export default HomeIntro;
