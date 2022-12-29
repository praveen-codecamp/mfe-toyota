import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Landing from './components/Landing';
import Standard from './components/Standard';
import Authorise from './components/Authorise';

export default ({ history }) => {
  return (
    <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/payment" component={Landing} />
            <Route exact path="/payment/standard" component={Standard} />
            <Route exact path="/payment/authorise" component={Authorise} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
    </div>
  );
};
