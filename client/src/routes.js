import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Views/Homepage';
import { Secondary } from './components/Views/Secondary';
import NotFoundPage from './components/Views/NotFoundPage';

const Routes = () => {
  return (
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
}

export default Routes;