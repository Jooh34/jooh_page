import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Homepage, Aboutpage, Postpage } from './components/pages'
import App from './components/App'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <App>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/about" component={Aboutpage}/>
              <Route path="/post" component={Postpage}/>
            </Switch>
          </App>
        </div>
      </Router>
    );
  }
}
export default Routes;
