import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import CircularSocialButtons from '../app/CircularSocialButtons';
import ScrollDownButton from '../app/ScrollDownButton';

const Container = styled.div`
  width : 100%;
  height : 600px;

  padding-top : 50px;
  position : relative;
`;

const TitleTemplete = styled.h1`
  width : 100%;
  text-align : center;

  font-family : axis;
  font-size : 2em;
`;

const ProfileContainer = styled.div`
  width : 80%;
  height : 400px;
  margin-left : 10%;
  margin-right : 10%;
  margin-top : 50px;

  padding : 50px 100px 50px 100px ;

  border : 1px solid #66636a;
  border-radius : 20px;

  position : relative;
`;

const TextContainer = styled.div`
  float : right;
  width : 60%;
  height : 300px;

`;

const NanumTemplete = styled.h1`
  margin-top : ${props => props.margin_top}px;

  font-family :nanum;
  font-size : 2em;
  text-align : center;
`;

const AxisTemplete = styled.h2`
  margin-top : 15px;

  font-family : blogger;
  font-size : 1.5em;
  text-align : center;
`;

const ProfileImage = styled.img`
  border-radius : 20px;
  height: 288px;
  width: 216px;
`;

const SocialButtonsConatiner = styled.div`
  position: absolute;
  bottom : 30px;
`;

const image = require('../../assets/images/avatar2.jpg')

class ProfileBox extends Component {

  constructor(props) {
    super(props);

    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  handleScrollDown() {
    var el = document.getElementById('footer');
    el.scrollIntoView({ behavior: 'smooth' , block: "end"});
  }

  render() {

    return (
      <Container id = 'profilebox'>
        <TitleTemplete> Profile </TitleTemplete>
        <ProfileContainer>
          <ProfileImage src = {image}/>
          <TextContainer>
            <NanumTemplete margin_top = {5} > 남 중 혁 </NanumTemplete>
            <AxisTemplete> Seoul National University </AxisTemplete>
            <AxisTemplete> Computer Science and Engineering </AxisTemplete>
            <AxisTemplete> finished 5th semester , Taking semester off now </AxisTemplete>
            <NanumTemplete margin_top = {30} > 현재 산업기능요원 지원 중입니다. </NanumTemplete>
            <SocialButtonsConatiner>
              <CircularSocialButtons/>
            </SocialButtonsConatiner>
          </TextContainer>
        </ProfileContainer>
        <ScrollDownButton handleScrollDown = {this.handleScrollDown}/>
      </Container>
    );
  }
}

export default ProfileBox;
