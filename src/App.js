import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  HomePage,
  MainPage,
  ChatPage
} from './Routes';

import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route 
            exact
            path="/"
            component={HomePage}
          />
          <Route
            path="/Main"
            component={MainPage}
          />
          <Route
            path="/Chat"
            component={ChatPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
