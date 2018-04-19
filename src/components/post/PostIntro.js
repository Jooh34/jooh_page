import React, { Component } from 'react';
import styled from 'styled-components';

import postWallpaper from '../../assets/images/post_wallpaper.png';

const BackgroundContainer = styled.div`
  background-image: url(${postWallpaper});

  min-height: 600px;

  width: 100%;
  height : auto;
  background-size: cover;
  background-repeat: no-repeat;

  opacity : ${props => props.opacity};
`;

const IntroText = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: white;
  background-color : hsla(89, 43%, 51%, 0.5);;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: ${props => props.topY + '%'};
  left: 50%;
  font-size: 4rem;
  transform: translate(-50%, -50%);
`;

class PostIntro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      IntroTextY : 60,
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
        opacity : (600-scrollY)/600,
        IntroTextY : 60 + 20 *scrollY/200,
      }
    });
  }

  render() {
    console.log(this.state.opacity)
    return (
      <BackgroundContainer opacity = {this.state.opacity}>
        <IntroText topY = {this.state.IntroTextY}>
          { 'Here is my work !'}
        </IntroText>
      </BackgroundContainer>
    );
  }
}

export default PostIntro;
