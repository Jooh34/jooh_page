import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Margin = styled.div`
  margin-top : 20px
`;

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    var pathname = this.props.location.pathname;

    this.state = {
      activeItem : (pathname === '/') ? 'home' : pathname.substring(1),
    };
  }
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    if (name === 'home') this.props.history.push('/');
    else this.props.history.push('/'+name);
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state

    return (
      <Margin>
        <Menu pointing secondary color={'grey'} >
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item name='post' active={activeItem === 'post'} onClick={this.handleItemClick} />
        </Menu>
      </Margin>
    )
  }
}

export default withRouter(NavigationBar);
