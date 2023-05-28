import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import ThemeProvider from "../../shared/theme";
import Nav from "../../shared/nav";
import { navConfig } from "./navConfig";
import Progress from "./components/Progress";

const Actions = lazy(() => import("./components/Actions"));
const BusinessFunctionResourceActions = lazy(() =>
  import("./components/BusinessFunctionResourceActions")
);
const BusinessFunctions = lazy(() => import("./components/BusinessFunctions"));
const RoleBusinessFunctionGroups = lazy(() =>
  import("./components/RoleBusinessFunctionGroups")
);
const Roles = lazy(() => import("./components/Roles"));
const Organizations = lazy(() => import("./components/Organizations"));
const Users = lazy(() => import("./components/Users"));
const Landing = lazy(() => import("./components/Landing"));

export default ({ history, userDetails }) => {
  const [open, setOpen] = useState(false);
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
            <Route path="/admin/actions">
              <Suspense fallback={<Progress />}>
                <Actions userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin/businessFunctions">
              <Suspense fallback={<Progress />}>
                <BusinessFunctions userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin/businessFunctionResourceActions">
              <Suspense fallback={<Progress />}>
                <BusinessFunctionResourceActions userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin/users">
              <Suspense fallback={<Progress />}>
                <Users userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin/roles">
              <Suspense fallback={<Progress />}>
                <Roles userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin/roleBusinessFunctionGroups">
              <Suspense fallback={<Progress />}>
                <RoleBusinessFunctionGroups userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin/organizations">
              <Suspense fallback={<Progress />}>
                <Organizations userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/admin">
              <Suspense fallback={<Progress />}>
                <Organizations userDetails={userDetails} />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<Progress />}>
                <Landing userDetails={userDetails} />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};
