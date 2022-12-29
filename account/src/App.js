import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Landing from './components/Landing';
import Balance from './components/Balance';
import Activity from  './components/Activity'

export default ({ history }) => {
  return (
    <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/account/balance" component={Balance} />
            <Route exact path="/account/activity" component={Activity} />
            <Route path="/account" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
    </div>
  );
};
