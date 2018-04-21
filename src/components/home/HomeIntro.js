import React, { Component } from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { Image } from 'semantic-ui-react'

import basketball_wallpaper from '../../assets/images/wallpaper/basketball.jpg';


const Container = styled.div`
  background-image: url(${basketball_wallpaper});
  min-height: 600px;

  width: 100%;
  height : auto;
  background-size: cover;
  background-repeat: no-repeat;

  padding-top : 20px;
  padding-left : 20px;

  margin-bottom : 10px;

  opacity : ${props => props.opacity};
`;

const Text4em = styled.h2`
  font-family: 'ylee';
  color: #dfdfdf;
  font-size : 4em;
  text-align : center;
`;

const Text6em = styled.h2`
  font-family: 'ylee';
  color: #dfdfdf;
  font-size : 6em;
  text-align : center;
`;

const WelcomeTextContainer = styled.div`
  float : top;
  margin-top : 50px;
  width : 60%;
  transform: translate(${props => props.left + '%'}, 0%);
`;

const IntroductionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width : 50%;
  transform: translate(${props => props.left + '%'}, 0%);
`;

const welcomeMessage = 'Welcome to Jooh\'s Page!'
const introMessage = 'Thank you for visiting my website!';

class HomeIntro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity : 0,
      welcomeLeft : -100,
      introLeft : -100,
      intervalId : '',
    };

    this.wallpaperFadeIn = this.wallpaperFadeIn.bind(this);
    this.welcomeToRight = this.welcomeToRight.bind(this);
    this.introToRight = this.introToRight.bind(this);
  }

  componentDidMount() {
    var intervalId = setInterval(this.wallpaperFadeIn, 10);
    this.setState({intervalId: intervalId});
  }

  wallpaperFadeIn() {
    this.setState({ opacity: this.state.opacity + 0.01 });

    if(this.state.opacity >= 1) {
      clearInterval(this.state.intervalId);
      var intervalId = setInterval(this.welcomeToRight, 10);
      this.setState({intervalId: intervalId});
    }
  }

  welcomeToRight() {
    this.setState({ welcomeLeft: this.state.welcomeLeft + 2 });

    if(this.state.welcomeLeft >= 0) {
      clearInterval(this.state.intervalId);
      var intervalId = setInterval(this.introToRight, 10);
      this.setState({intervalId: intervalId});
    }
  }

  introToRight() {
    this.setState({ introLeft: this.state.introLeft + 2 });

    if(this.state.introLeft >= 0) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    console.log('opa' + this.state.opacity)
    console.log('wl' + this.state.welcomeLeft)
    console.log('il' + this.state.introLeft)
    return (
      <Container opacity = {this.state.opacity}>
        <WelcomeTextContainer left = {this.state.welcomeLeft}>
          <Text6em> {welcomeMessage} </Text6em>
        </WelcomeTextContainer>
        <IntroductionContainer left = {this.state.introLeft}>
          <Text4em> {introMessage} </Text4em>
        </IntroductionContainer>
      </Container>
    );
  }
}

export default HomeIntro;
