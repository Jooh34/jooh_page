import React, { Component } from 'react';
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'
import styled from 'styled-components';

import PostItem from './PostItem'
import PaginationNavBar from './PaginationNavBar'

const PostListTemplete = styled.div`
  width: 70%;
  margin: 30px auto;
`;

const posts = require('../../assets/posts').default;

class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activePage : 1,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e, { activePage }) {
    window.scrollTo(0, 400);
    this.setState({
      activePage : activePage,
    });
  }

  render() {
    const activePosts = posts.slice((this.state.activePage-1)*5,this.state.activePage*5)
    return (
      <PostListTemplete>
        <Item.Group divided>
          { activePosts.map(post => <PostItem post={post}/>) }
        </Item.Group>
        <PaginationNavBar handlePageChange={this.handlePageChange}/>
      </PostListTemplete>
    );
  }
}

export default PostList;
