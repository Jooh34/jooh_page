import React , { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components';
import { Label } from 'semantic-ui-react'

const Templete = styled.div`
  margin-right : 10px;
`;

class CircularSocialButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mail : '',
      mail_show : false,
    }
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleMailClick = this.handleMailClick.bind(this);
  }

  handleLinkClick (url) {
    window.open(url);
  }

  handleMailClick () {
    if(this.state.mail_show) {
      this.setState(function (state, props) {
        return {
          mail : '',
          mail_show : false,
        }
      });
    }
    else {
      this.setState(function (state, props) {
        return {
          mail : 'jooh3444@gmail.com',
          mail_show : true,
        }
      });
    }
  }

  render() {
    return (
      <Templete>
        <Button circular size = 'small' color='blue' icon='github' onClick = {() => this.handleLinkClick('https://github.com/Jooh34')}/>
        <Button circular size = 'small' color='facebook' icon='facebook' onClick = {() => this.handleLinkClick('https://www.facebook.com/profile.php?id=100001459008632')}/>
        <Button circular size = 'small' color='instagram' icon='instagram' onClick = {() => this.handleLinkClick('https://www.instagram.com/mnh513/')}/>
        <Label as='a' content={this.state.mail} icon='mail' onClick = {() => this.handleMailClick()}/>
      </Templete>
    );
  }
}

export default CircularSocialButtons
