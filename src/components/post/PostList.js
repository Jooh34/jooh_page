import React, { Component } from 'react';
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'
import styled from 'styled-components';

import PostItem from './PostItem'

const PostListTemplete = styled.div`
  width: 70%;
  margin: 40px auto;
`;

const posts = require('../../assets/posts').default;

class PostList extends Component {
  render() {
    return (
      <PostListTemplete>
        <Item.Group divided>
          { posts.map(post => <PostItem post={post}/>) }
        </Item.Group>
      </PostListTemplete>
    );
  }
}

export default PostList;
