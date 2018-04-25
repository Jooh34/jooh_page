import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width : 100%;
  height : 80px;
  background-color : #26262a;
`;

const MenusContainer = styled.div`
  padding-top : 20px;
  width : 40%;
  float : right;
`;

const MenuContainer = styled.div`
  width : 33%;
  margin-top : 5px;
  display: inline-block;
  cursor: pointer;
`;

const Menu = styled.div`
  font : axis;
  font-weight: bold;
  color : ${props => (props.mouseOn === props.name || props.mouseOn === '') ? '#ffffff' : '#8d888f'}
  background-color : #26262a;
  font-size : 1em;
  display: inline-block;
  margin-left : 20%;
  margin-top : 10px;

  width : 70%;
  text-align : center;

  border : ${props => (props.mouseOn === props.name) ? '1px solid #ffffff' : ''}
  border-radius: 20px;
`;

const Bulkhead = styled.div`
  background-color : #ffffff;

  width : 0.25%;
  height : 15px;
  display: inline-block;
`;

class NavigationBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mouseOn : '',
    };
  }

  handleMenuClick = (name) => {
    if (name === 'home') this.props.history.push('/');
    else this.props.history.push('/'+name);
  }

  handleMenuMouseEnter = (name) => {
    this.setState({
      mouseOn : name,
    });
  }

  handleMenuMouseLeave = (name) => {
    this.setState({
      mouseOn : '',
    });
  }

  render() {

    return (
      <Container id = 'navbar'>
        <MenusContainer>
          <MenuContainer onClick = {()=>this.handleMenuClick('home')} onMouseEnter ={() => this.handleMenuMouseEnter('home')} onMouseLeave ={() => this.handleMenuMouseLeave('home')}>
            <Menu mouseOn = {this.state.mouseOn} name = 'home'> HOME </Menu>
          </MenuContainer>
          <MenuContainer onClick = {()=>this.handleMenuClick('about')} onMouseEnter ={() => this.handleMenuMouseEnter('about')} onMouseLeave ={() => this.handleMenuMouseLeave('about')}>
            <Menu mouseOn = {this.state.mouseOn} name = 'about'> ABOUT ME </Menu>
          </MenuContainer>
          <MenuContainer onClick = {()=>this.handleMenuClick('post')} onMouseEnter ={() => this.handleMenuMouseEnter('post')} onMouseLeave ={() => this.handleMenuMouseLeave('post')}>
            <Menu mouseOn = {this.state.mouseOn} name = 'post'> MY WORK </Menu>
          </MenuContainer>
        </MenusContainer>
      </Container>
    )
  }
}

export default withRouter(NavigationBar);
