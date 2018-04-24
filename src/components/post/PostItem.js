import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import styled from 'styled-components';
import { Image } from 'semantic-ui-react'

const ItemContainer = styled.div`
  width : 100%;
  height : 350px;
  background-color : #ffffff;
  padding-top : 30px;

  border-bottom: 1px solid #edeeef;
`;

const ImageContainer = styled.div`
  margin-left : 5%;
  width : 30%;

  display : inline-block;
`;

const TextContainer = styled.div`
  width : 60%;
  height : 100%;
  display : inline-block;
  float : right;
  margin-right : 2.5%;

  position: relative;
`;

const TitleTemplete = styled.h1`
  font-family :nanum;
  font-size : 1.5em;
`;

const DescriptionTemplete = styled.h2`
  font-family :nanum;
  font-size : 1em;
`;

const SubtitleTemplete = styled.h2`
  font-family : metropolis;
  font-size : 1em;
  font-weight : lighter;
  color : #36363a;
`;

const TagContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0;
`;

const LabelContainer = styled.div`
  margin-bottom : 5px;
  vertical-align: middle
`;

const GithubURLContainer = styled.div`
  margin-bottom : 5px;
  vertical-align: middle
`;

const DemoURLContainer = styled.div`
  margin-bottom : 20px;
  vertical-align: middle
`;



class PostItem extends Component {
  constructor(props) {
    super(props);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  handleDemoClick (url) {
    window.open(url);
  }

  render() {

    const post = this.props.post;
    return (
      <ItemContainer>
        <ImageContainer>
          <Image src = {post.cover} size='medium' rounded />
        </ImageContainer>
        <TextContainer>
            <TitleTemplete> {'Title : ' + post.title} </TitleTemplete>
            <SubtitleTemplete> { post.subtitle } </SubtitleTemplete>
            <DescriptionTemplete> { post.description } </DescriptionTemplete>
            <TagContainer>
              <LabelContainer> { post.labels.map(label => <Label content={label}/>) } </LabelContainer>
              <GithubURLContainer>
                { (post.github_url) && <Icon name='github'/> }
                { (post.github_url) && <a href= {post.github_url}>{post.github_url}</a> }
              </GithubURLContainer>
              <DemoURLContainer> { (post.demo_url) && <Label icon = {'external'} content ={'Demo'} color = {'blue'} as='a' onClick = {()=>this.handleDemoClick(post.demo_url)}/> } </DemoURLContainer>
            </TagContainer>

        </TextContainer>
      </ItemContainer>
    );
  }
}

export default PostItem;
