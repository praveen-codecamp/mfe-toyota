import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import ThemeProvider from "../../shared/theme";
import Landing from "./components/Landing";

export default ({ history }) => {
  return (
    <div style={{ marginTop: 64 }}>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/admin" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};
