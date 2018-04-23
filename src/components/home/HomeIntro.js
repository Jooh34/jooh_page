import React, { Component } from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { Image } from 'semantic-ui-react'

import home_wallpaper from '../../assets/images/wallpaper/home_wallpaper.jpg';


const Container = styled.div`
  background-image: url(${home_wallpaper});
  min-height: 600px;

  width: 100%;
  height : auto;
  background-size: cover;
  background-repeat: no-repeat;

  padding-top : 20px;
  padding-left : 20px;

  opacity : ${props => props.opacity};
`;

const Text4em = styled.h2`
  font-family: 'axis';
  color: #dfdfdf;
  font-size : 3em;
  text-align : center;
`;

const Text6em = styled.h2`
  font-family: 'axis';
  color: #dfdfdf;
  font-size : 4em;
  text-align : center;
`;

const WelcomeTextContainer = styled.div`
  padding-top : 150px;
  margin : auto;
  width : 80%;
  transform: translate(${props => props.left/5 + '%'}, 0%);
  opacity : ${props => (props.left+100)*0.01};
`;

const IntroductionContainer = styled.div`
  width : 70%;
  margin : auto;
  margin-top : 150px;
  transform: translate(${props => props.left/5 + '%'}, 0%);
  opacity : ${props => (props.left+100)*0.01};
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
    var intervalId = setInterval(this.wallpaperFadeIn, 5);
    this.setState({intervalId: intervalId});
  }

  wallpaperFadeIn() {
    this.setState({ opacity: this.state.opacity + 0.01 });

    if(this.state.opacity >= 1) {
      clearInterval(this.state.intervalId);
      var intervalId = setInterval(this.welcomeToRight, 5);
      this.setState({intervalId: intervalId});
    }
  }

  welcomeToRight() {
    this.setState({ welcomeLeft: this.state.welcomeLeft + 1 });

    if(this.state.welcomeLeft >= 0) {
      clearInterval(this.state.intervalId);
      var intervalId = setInterval(this.introToRight, 5);
      this.setState({intervalId: intervalId});
    }
  }

  introToRight() {
    this.setState({ introLeft: this.state.introLeft + 1 });

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
