import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react'

const posts = require('../../assets/posts').default;

class PaginationNavBar extends Component {
  render() {
    return (
      <Pagination defaultActivePage={5} totalPages={posts.length/5} onPageChange = {this.props.handlePageChange}/>
    );
  }
}

export default PaginationNavBar
