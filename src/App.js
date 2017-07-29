import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  HomePage,
  MainPage,
  MusicPage,
  ChatPage,
  ChatEnterPage
} from './Routes';

import logo from './logo.svg';
import 'styles/index.css';

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
            path="/Music"
            component={MusicPage}
          />
          <Route
            path="/Chat"
            component={ChatPage}
          />
          <Route
            path="/ChatEnter"
            component={ChatEnterPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
