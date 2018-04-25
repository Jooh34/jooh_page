import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

import about_wallpaper from '../../assets/images/wallpaper/a.jpg';

const Container = styled.div`
  background-image : url(${about_wallpaper});
  width: 100%;
  margin-top : ${props => props.max_height-props.height}px;
  height: ${props => props.height}px;

  background-size: cover;
  background-repeat: no-repeat;
  position: relative
`;

const NextButtonContainer = styled.div`
  width : 100%;
  height : 60px;
  background-color : hsla(120, 100%, 100%, 0.7);
  background-color :  ${props => (props.mouseOn) ? 'hsla(120, 100%, 100%, 0.6)' : ' hsla(120, 100%, 100%, 0.4)'};
  position: absolute;
  bottom: 0;

  cursor: pointer;
`;

const NextButtonTemplete = styled.div`
  width : 70px;
  margin : auto;
`;

const TextButtonTemplete = styled.h2`
  font-family : axis;
  font-size : 1.5em;
  width : 50%;
  margin : auto;

  padding-top : 15px;
  text-align : center;
`;

const Temp = styled.div`
  background-color : #ffffff;

  width: 100%;
  height: 600px;
`;

var END_SCROLL_Y = 680;
var IMAGE_HEIGHT = 600;
var START_SCROLL_Y = 80;

const profile_image = require('../../assets/images/avatar2.jpg');
const name = '남 중 혁';

class AboutIntro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posY : 0,
      mouseOn : false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMouseOn = this.handleMouseOn.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
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

  handleMouseOn() {
    this.setState(function (state, props) {
      return {
        mouseOn : true,
      }
    })
  }

  handleMouseLeave() {
    this.setState(function (state, props) {
      return {
        mouseOn : false,
      }
    })
  }

  handleScrollDown() {
    var el = document.getElementById('profilebox');
    el.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }

  render() {

    var height = IMAGE_HEIGHT;
    if(this.state.posY < END_SCROLL_Y-IMAGE_HEIGHT) height = IMAGE_HEIGHT;
    else if(this.state.posY > END_SCROLL_Y) height = 0;
    else height = IMAGE_HEIGHT - (this.state.posY - START_SCROLL_Y) * 0.7;

    const scrollbutton = this.state.mouseOn ? (
        <TextButtonTemplete> Scroll Down </TextButtonTemplete>
    ) : (
      <NextButtonTemplete>
        <Icon name='chevron down' size = 'huge'/>
      </NextButtonTemplete>
    );

    return (
      <div>
        <Container max_height = {IMAGE_HEIGHT} height = {height}>
          <NextButtonContainer mouseOn = {this.state.mouseOn} onMouseEnter = {this.handleMouseOn} onMouseLeave = {this.handleMouseLeave} onClick = {this.handleScrollDown}>
            {scrollbutton}
          </NextButtonContainer>
        </Container>
      </div>
    );
  }
}

export default AboutIntro;
