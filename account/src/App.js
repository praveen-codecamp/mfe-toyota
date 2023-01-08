import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Landing from "./components/Landing";
import Balance from "./components/Balance";
import Activity from "./components/Activity";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Ver ${
        packageJson.version
      }`}
    </Typography>
  );
}
export default ({ history }) => {
  return (
    <div style={{ marginTop: 64 }}>
      <Router history={history}>
        <Switch>
          <Route exact path="/account/balance" component={Balance} />
          <Route exact path="/account/activity" component={Activity} />
          <Route path="/account" component={Landing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
};
