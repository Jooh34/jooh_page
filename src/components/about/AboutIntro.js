import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

import ScrollDownButton from '../app/ScrollDownButton';
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

var END_SCROLL_Y = 680;
var IMAGE_HEIGHT = 600;
var START_SCROLL_Y = 80;
var SCROLL_DOWN_RATIO = 0.7;

class AboutIntro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posY : 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    START_SCROLL_Y = document.getElementById('aboutintro').getBoundingClientRect().y;
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
    var el = document.getElementById('profilebox');
    el.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  render() {

    var height = IMAGE_HEIGHT;
    if(this.state.posY < END_SCROLL_Y-IMAGE_HEIGHT) height = IMAGE_HEIGHT;
    else if(this.state.posY > END_SCROLL_Y) height = (1-SCROLL_DOWN_RATIO) * IMAGE_HEIGHT;
    else height = IMAGE_HEIGHT - (this.state.posY - START_SCROLL_Y) * SCROLL_DOWN_RATIO;

    return (
      <div>
        <Container id = 'aboutintro' max_height = {IMAGE_HEIGHT} height = {height}>
          <ScrollDownButton handleScrollDown = {this.handleScrollDown}/>
        </Container>
      </div>
    );
  }
}

export default AboutIntro;
