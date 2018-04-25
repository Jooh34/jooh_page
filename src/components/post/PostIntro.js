import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollDownButton from '../app/ScrollDownButton';
import postWallpaper from '../../assets/images/wallpaper/post_wallpaper.jpg';

const BackgroundContainer = styled.div`
  background-image: url(${postWallpaper});

  width: 100%;
  padding-top : ${props => props.max_height-props.height}px;
  height: ${props => props.height}px;
  background-size: cover;
  background-repeat: no-repeat;

  position : relative;
  opacity : 1.0;
`;

const IntroText = styled.h2`
  font-family: 'axis';
  font-weight: 900;
  color: black;
  background-color : hsla(120, 100%, 90%, 0.7);
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: ${props => props.textY + '%'};
  left: 50%;
  font-size: 4rem;
  transform: translate(-50%, -50%);
`;

var END_SCROLL_Y = 680;
var IMAGE_HEIGHT = 600;
var START_SCROLL_Y = 80;
var SCROLL_DOWN_RATIO = 0.7;

class PostIntro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posY : 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    START_SCROLL_Y = document.getElementById('postintro').getBoundingClientRect().y;
    END_SCROLL_Y = START_SCROLL_Y + IMAGE_HEIGHT;
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

  handleScrollDown() {
    var el = document.getElementById('postlist');
    el.scrollIntoView({ behavior: 'smooth' , block: "start", inline: "nearest"});
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
      textY = 80;
      height = IMAGE_HEIGHT * (1-SCROLL_DOWN_RATIO);
    }
    else {
      opacity = (END_SCROLL_Y-this.state.posY)/600;
      textY = 60 + 20 * (1-opacity);
      height = IMAGE_HEIGHT - (this.state.posY - START_SCROLL_Y) * SCROLL_DOWN_RATIO;
    }
    return (
      <BackgroundContainer id = 'postintro' max_height = {IMAGE_HEIGHT} height = {height} opacity = {opacity}>
        <IntroText textY = {textY}>
          { 'Here is my work!'}
        </IntroText>
        <ScrollDownButton handleScrollDown = {this.handleScrollDown}/>
      </BackgroundContainer>
    );
  }
}

export default PostIntro;
