import React, { Component } from 'react';
import styled from 'styled-components';

import PostItem from './PostItem'
import PaginationNavBar from './PaginationNavBar'

const PostBackgroundContainer = styled.div`
  width : 100%;
  background-color : #edeeef;
`;

const PostListContainer = styled.div`
  width: 70%;
  padding-top : 200px;
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
    var el = document.getElementById('postlist');
    el.scrollIntoView({ behavior: 'smooth' , block: "start", inline: "nearest"});
    this.setState({
      activePage : activePage,
    });
  }

  render() {
    const activePosts = posts.slice((this.state.activePage-1)*5,this.state.activePage*5)
    return (
      <div id = 'postlist'>
        <PostBackgroundContainer>
          <PostListContainer>
              { activePosts.map(post => <PostItem post={post}/>) }
            <PaginationNavBar handlePageChange={this.handlePageChange}/>
          </PostListContainer>
        </PostBackgroundContainer>
      </div>
    );
  }
}

export default PostList;
