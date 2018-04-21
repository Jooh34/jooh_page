import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components';

const LoadingTemplete = styled.div`
  margin-top : 250px;
  width: 100%;
  padding: 10px;
`;

const Text4em = styled.h2`
  font-family: 'ylee';
  color: #dfdfdf;
  font-size : 4em;
  text-align : center;
`;

class Loadingpage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoadingTemplete>
        <Loader active size = 'large' inline='centered'>Loading... Wait for {this.props.count} seconds ...</Loader>
        <Text4em> Jooh </Text4em>
      </LoadingTemplete>
    )
  }
}

export default Loadingpage
