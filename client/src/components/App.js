import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './views/Homepage/Homepage';
import { Secondary } from './views/Secondary/Secondary';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" component={Homepage} exact />
            <Route path="/secondary" component={Secondary} exact />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
