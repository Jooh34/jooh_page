import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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
  margin-top : 70px;

  width : 30%;
  margin-left : 40%;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleTextNavClick = (name) => {
    if (name === 'home') this.props.history.push('/');
    else this.props.history.push('/'+name);

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <TextNavContainer>
          <TextNav onClick = {()=>this.handleTextNavClick('home')}> HOME </TextNav>
          <Bulkhead />
          <TextNav onClick = {()=>this.handleTextNavClick('about')}> ABOUT ME </TextNav>
          <Bulkhead />
          <TextNav onClick = {()=>this.handleTextNavClick('post')}> MY WORK </TextNav>
        </TextNavContainer>
        <SocialButtonsContainer>
          <CircularSocialButtons />
        </SocialButtonsContainer>
      </Container>
    )
  }
}

export default withRouter(Footer)
