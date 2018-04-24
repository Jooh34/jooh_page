import React, { Component } from 'react';
import styled from 'styled-components';

import PostItem from './PostItem'
import PaginationNavBar from './PaginationNavBar'

const PostBackgroundContainer = styled.div`
  background-color : #edeeef;
`;

const PostListContainer = styled.div`
  width: 70%;
  padding-top : 30px;
  margin: auto;
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
      <PostBackgroundContainer>
        <PostListContainer>
            { activePosts.map(post => <PostItem post={post}/>) }
          <PaginationNavBar handlePageChange={this.handlePageChange}/>
        </PostListContainer>
      </PostBackgroundContainer>
    );
  }
}

export default PostList;
