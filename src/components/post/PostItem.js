import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class PostItem extends Component {
  render() {
    return (
      <Item>
        <Item.Image src= { this.props.post.cover } />

        <Item.Content>
          <Item.Header as='a'> { this.props.post.title } </Item.Header>
          <Item.Meta>
            <span className='cinema'> {this.props.post.subtitle} </span>
          </Item.Meta>
          <Item.Description>{this.props.post.description}</Item.Description>
          <Item.Extra>
            { this.props.post.labels.map(label => <Label content={label}/>) }
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default PostItem;
