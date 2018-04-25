import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import CircularSocialButtons from './CircularSocialButtons';

const Container = styled.div`
  width : 100%;
  height : 250px;
  background-color : #26262a;
  padding-top : 30px;
`;

const TextNavContainer = styled.div`
  padding-top : 50px;
  width : 30%;
  margin : auto;
`;

const TextNav = styled.div`
  font : blogger;
  color : #ffffff;
  background-color : #26262a;
  font-size : 1em;
  cursor: pointer;
  display: inline-block;

  width : 33%;
  text-align : center;
`;

const Bulkhead = styled.div`
  background-color : #ffffff;

  width : 0.5%;
  height : 10px;
  display: inline-block;
`;

const SocialButtonsContainer = styled.div`
  margin-top : 20px;
  margin-left : 40%;

  width : 40%;
`;

const TopButtonContainer = styled.div`
  width : 100px;
  height : 50px;
  margin : auto;
  margin-top : 20px;

  border : 0.5px solid #edeeef;
  cursor : pointer;
`;

const IconContainer = styled.div`
  width : 30px;
  height : 50%;
  margin : auto;
`;

const ToTheTopTemplete = styled.div`
  font : blogger;
  width : 100%;
  height : 50%;
  color : #ffffff;
  font-size : 0.8em;

  text-align : center;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleTextNavClick(name) {
    if (name === 'home') this.props.history.push('/');
    else this.props.history.push('/'+name);

    window.scrollTo(0, 0);
  }

  handleTopButtonClick() {
    var el = document.getElementById('navbar');
    el.scrollIntoView({ behavior: 'smooth' , block: "start"});
  }

  render() {
    return (
      <Container id = 'footer'>
        <TextNavContainer>
          <TextNav onClick = {()=>this.handleTextNavClick('home')}> HOME </TextNav>
          <Bulkhead />
          <TextNav onClick = {()=>this.handleTextNavClick('about')}> ABOUT ME </TextNav>
          <Bulkhead />
          <TextNav onClick = {()=>this.handleTextNavClick('post')}> MY WORK </TextNav>
        </TextNavContainer>
        <TopButtonContainer onClick = {this.handleTopButtonClick}>
          <IconContainer> <Icon name='chevron up' size = 'large' color = 'grey'/> </IconContainer>
          <ToTheTopTemplete> To The Top </ToTheTopTemplete>
        </TopButtonContainer>
        <SocialButtonsContainer>
          <CircularSocialButtons />
        </SocialButtonsContainer>
      </Container>
    )
  }
}

export default withRouter(Footer)
