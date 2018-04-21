import React, { Component } from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { Image } from 'semantic-ui-react'

import ylee_url from '../../assets/fonts/ylee.ttf';
import basketball_wallpaper from '../../assets/images/wallpaper/about_wallpaper.jpg';

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

const ProfileContainer = styled.div`
  width : 50%;
  height : 560px;

  padding-top: 200px;
  margin : auto;

`;
const Text_4em = styled.h2`
  font-family : 'blogger';
  color: #dfdfdf;
  font-size : 4em;
  text-align : center;
`;

const Text_3em = styled.h2`
  font-family : 'blogger';
  color: #dfdfdf;
  font-size : 6em;
  text-align : center;
`;

const Text_2em = styled.h2`
  font-family : 'blogger';
  color: #dfdfdf;
  font-size : 4em;
  text-align : center;
`;

const ProfileTextContainer = styled.div`
  float : right;
  margin-right : 80px;
`;

const IntroductionContainer = styled.div`
  clear : both;
  width : 100%;
  height : 100px;
  padding-top : 50px;
`;

const ImageContainer = styled.div`
  float : left;
`;

const introMessage = 'Thank you for visiting my website ! ';

class AboutIntro extends Component {

  render() {
    return (
      <Container>
        <ProfileContainer>
          <ImageContainer>
            <Image src= {require('../../assets/images/avatar.jpg')} size='medium' />
          </ImageContainer>
          <ProfileTextContainer>
            <Text_3em> 남 중 혁 </Text_3em>
            <Text_2em> SoftwareDeveloper </Text_2em>
            <Text_2em> Seoul Natinal University </Text_2em>
            <Text_2em> Computer Science and Engineering </Text_2em>
          </ProfileTextContainer>
        </ProfileContainer>
      </Container>
    );
  }
}

export default AboutIntro;
