import React, { Component } from 'react';
import styled from 'styled-components';

import postWallpaper from '../../assets/images/wallpaper/post_wallpaper.png';

const BackgroundContainer = styled.div`
  background-image: url(${postWallpaper});

  width: 100%;
  margin-top : ${props => props.max_height-props.height}px;
  height: ${props => props.height}px;
  background-size: cover;
  background-repeat: no-repeat;

  opacity : ${props => 0.7+0.3*props.opacity};
`;

const IntroText = styled.h2`
  font-family: Roboto', sans-serif';
  font-weight: 900;
  color: white;
  background-color : hsla(180, 100%, 25%, 0.5);
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: ${props => props.textY + '%'};
  left: 50%;
  font-size: 4rem;
  transform: translate(-50%, -50%);
`;

var END_SCROLL_Y = 780;
var IMAGE_HEIGHT = 600;

class PostIntro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posY : 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    var scrollY = window.scrollY;
    this.setState(function (state, props) {
      return {
        posY : scrollY,
      }
    });
  }

  render() {
    var height = IMAGE_HEIGHT;
    var opacity = 1;
    var textY = 60;
    if(this.state.posY < END_SCROLL_Y-IMAGE_HEIGHT) {
      opacity = 1;
      textY = 60;
      height = IMAGE_HEIGHT;
    }
    else if (this.state.posY > END_SCROLL_Y) {
      opacity = 0;
      textY = 100;
      height = 0;
    }
    else {
      opacity = (END_SCROLL_Y-this.state.posY)/600;
      textY = 60 + 40 * (1-opacity);
      height = END_SCROLL_Y-this.state.posY;
    }
    return (
      <BackgroundContainer max_height = {IMAGE_HEIGHT} height = {height} opacity = {opacity}>
        <IntroText textY = {textY}>
          { 'Here is my work!'}
        </IntroText>
      </BackgroundContainer>
    );
  }
}

export default PostIntro;
