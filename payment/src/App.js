import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Landing from "./components/Landing";
import Standard from "./components/Standard";
import Authorise from "./components/Authorise";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} {` ver ${packageJson.version}`}
    </Typography>
  );
}

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
      <Copyright />
    </div>
  );
};
