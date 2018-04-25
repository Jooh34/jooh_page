import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const ButtonContainer = styled.div`
  width : 100%;
  height : 60px;
  background-color : hsla(120, 100%, 100%, 0.7);
  background-color :  ${props => (props.mouseOn) ? 'hsla(120, 100%, 100%, 0.6)' : ' hsla(120, 100%, 100%, 0.4)'};
  position: absolute;
  bottom: 0;

  cursor: pointer;
`;

const ButtonTemplete = styled.div`
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

class ScrollDownButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOn : false,
    };

    this.handleMouseOn = this.handleMouseOn.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
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
    this.props.handleScrollDown();
  }

  render() {

    const scrollbutton = this.state.mouseOn ? (
        <TextButtonTemplete> Scroll Down </TextButtonTemplete>
    ) : (
      <ButtonTemplete>
        <Icon name='chevron down' size = 'huge'/>
      </ButtonTemplete>
    );

    return (
      <ButtonContainer mouseOn = {this.state.mouseOn} onMouseEnter = {this.handleMouseOn} onMouseLeave = {this.handleMouseLeave} onClick = {this.handleScrollDown}>
        {scrollbutton}
      </ButtonContainer>
    );
  }
}

export default ScrollDownButton;
