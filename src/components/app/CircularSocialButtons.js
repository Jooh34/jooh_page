import React , { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components';

const Templete = styled.div`
  margin-right : 10px;
`;

class CircularSocialButtons extends Component {
  render() {
    return (
      <Templete>
        <Button circular size = 'tiny' color='blue' icon='github' />
        <Button circular size = 'tiny' color='facebook' icon='facebook' />
        <Button circular size = 'tiny' color='instagram' icon='instagram' />
        <Button circular size = 'tiny' color='teal' icon='mail' />
      </Templete>
    );
  }
}

export default CircularSocialButtons
