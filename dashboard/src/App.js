import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import "../styles/globals.css";
import Dashboard from "./components/reveal";
import View1 from "./components/reveal/View1";
import View2 from "./components/reveal/view2";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <div className=" text-center text-muted-foreground p-2 bg-slate-200">
      {`Copyright © ${new Date().getFullYear()} Assurant. All rights reserved. Dashboard version ${
        packageJson.version
      }`}
    </div>
  );
}
export default ({ history, userDetails }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard/view1">
            <View1 userDetails={userDetails} />
          </Route>
          <Route exact path="/dashboard/view2">
            <View2 userDetails={userDetails} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard userDetails={userDetails} />
          </Route>
          <Route path="/">
            <Dashboard userDetails={userDetails} />
          </Route>
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
};
