import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';
import styled from 'styled-components';

const posts = require('../../assets/posts').default;

const Container = styled.div`
  margin-top : 50px;
  padding-bottom : 50px;
`;

class PaginationNavBar extends Component {
  render() {
    return (
      <Container>
        <Pagination defaultActivePage={5} totalPages={posts.length/5} onPageChange = {this.props.handlePageChange}/>
      </Container>
    );
  }
}

export default PaginationNavBar
