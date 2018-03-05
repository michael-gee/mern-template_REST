import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import Homepage from './Views/Homepage';
import Secondary from './Views/Secondary';
import NotFoundPage from './Views/NotFoundPage';

import '../styles/global.css';

const App = () => (
  <Router>
    <div className="container">
      <Header title="MERN Template" />

      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/secondary" component={Secondary} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
