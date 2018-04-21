import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react'

import NavigationBar from './app/NavigationBar'
import Loadingpage from './app/Loadingpage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      intervalId : '',
      count : 3,
    }

    this.loadingTimer = this.loadingTimer.bind(this);
  }

  componentDidMount() {
    var intervalId = setInterval(this.loadingTimer, 1000);
    this.setState({
      intervalId: intervalId,
    });
  }

  loadingTimer() {
    this.setState({ count : this.state.count - 1 });

    if(this.state.count <= 0) {
      clearInterval(this.state.intervalId);
      this.setState({ loading : false });
    }
  }

  render() {
    if(this.state.loading)
      return (
        <Loadingpage count = {this.state.count}/>
      );

    else
      return (
        <div>
          <NavigationBar />
          {this.props.children}
        </div>
      );
  }
}

export default App
