import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const ProfileContainer = styled.div`
  position : fix;
  width : 80%;
  height : 80%;
`;

const Temp = styled.div`
  background-color : #ffffff;

  width: 100%;
  height: 600px;
`;

const ImageContainer = styled.div`
  position : absolute;
  margin-left : 5%;
  width : 30%;

  display : inline-block;
`;

const TextContainer = styled.div`
  width : 60%;
  height : 100%;
  display : inline-block;
  float : right;
  margin-right : 2.5%;

  position: relative;
`;

const NameTemplete = styled.h1`
  font-family :nanum;
  font-size : 1.5em;
`;

class ProfileBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id = 'profilebox'>
        <Temp/>
      </div>
    );
  }
}

export default ProfileBox;
