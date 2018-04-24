import React, { Component } from 'react';
import styled from 'styled-components';
import home_wallpaper from '../../assets/images/wallpaper/about_wallpaper.jpg';

const Container = styled.div`
  background-image : url(${home_wallpaper});

  width: 100%;
  margin-top : ${props => props.max_height-props.height}px;
  height: ${props => props.height}px;

  background-size: cover;
  background-repeat: no-repeat;
`;

const Temp = styled.div`

  background-color : teal;

  width: 100%;
  height: 600px;
`;

var END_SCROLL_Y = 780;
var IMAGE_HEIGHT = 600;
var START_SCROLL_Y = 180;

class AboutIntro extends Component {

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
    console.log(scrollY);
    this.setState(function (state, props) {
      return {
        posY : scrollY,
      }
    });
  }

  render() {

    var height = IMAGE_HEIGHT;
    if(this.state.posY < END_SCROLL_Y-IMAGE_HEIGHT) height = IMAGE_HEIGHT;
    else if(this.state.posY > END_SCROLL_Y) height = 0;
    else height = IMAGE_HEIGHT - (this.state.posY - START_SCROLL_Y) * 0.8;

    return (
      <div>
        <Container max_height = {IMAGE_HEIGHT} height = {height}/>
        <Temp />
      </div>
    );
  }
}

export default AboutIntro;
