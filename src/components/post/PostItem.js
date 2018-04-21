import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import styled from 'styled-components';

const ItemTemplete = styled(Item)`
  &&& {
   min-height : 250px;
  }
`;

class PostItem extends Component {
  render() {

    const post = this.props.post;
    return (
      <ItemTemplete>
        <Item.Image src= { post.cover } />
        <Item.Content>
          <Item.Header as='a'> { post.title } </Item.Header>
          <Item.Meta>
            <span className='cinema'> {post.subtitle} </span>
          </Item.Meta>
          <Item.Description>{post.description}</Item.Description>
          <Item.Extra>
            { post.labels.map(label => <Label content={label}/>) }
          </Item.Extra>
          <Item.Meta>
            { (post.github_url) && <Icon name='github'/> }
            { (post.github_url) && <a href= {post.github_url}>{post.github_url}</a> }
          </Item.Meta>
          { (post.demo_url) && <Label icon = {'external'} content ={'Demo'} color = {'blue'} as='a'/> }

        </Item.Content>
      </ItemTemplete>
    );
  }
}

export default PostItem;
