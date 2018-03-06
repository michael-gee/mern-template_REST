import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';

import Homepage from './Views/Homepage';
import AuthPage from './Views/AuthPage';
import UserProfile from './Views/UserProfile';
import TokenConfig from './Views/TokenConfig';
import NotFoundPage from './Views/NotFoundPage';

import '../styles/global.css';

const App = () => (
  <Router>
    <div className="container">
      <Header title="MERN Template" />

      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/log-in" component={AuthPage} />
        <Route path="/user-profile" component={UserProfile} />

        <Route path="/token" component={TokenConfig} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
