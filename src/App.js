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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
