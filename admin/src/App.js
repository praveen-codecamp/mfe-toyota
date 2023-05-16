import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import ThemeProvider from "../../shared/theme";
import Nav from "../../shared/nav";
import { navConfig } from "./navConfig";
import Landing from "./components/Landing";

export default ({ history }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ marginTop: 64 }}>
      <ThemeProvider>
        <Router history={history}>
          <Nav
            openNav={open}
            onCloseNav={() => setOpen(false)}
            navConfig={navConfig}
          />
          <Switch>
            <Route exact path="/admin" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};
