import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Landing from "./components/Landing";

export default ({ history }) => {
  return (
    <div style={{ marginTop: 64 }}>
      <Router history={history}>
        <Switch>
          <Route exact path="/preferences" component={Landing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
};
