import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import ThemeProvider from "../../shared/theme";
import Nav from "../../shared/nav";
import { navConfig } from "./navConfig"; 
import Landing from "./components/Landing";
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
const UserRoles = lazy(() => import("./components/UserRoles"));
const Users = lazy(() => import("./components/Users"));

export default ({ history }) => {
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
                <Actions />
              </Suspense>
            </Route>
            <Route path="/admin/businessFunctions">
              <Suspense fallback={<Progress />}>
                <BusinessFunctions />
              </Suspense>
            </Route>
            <Route path="/admin/businessFunctionResourceActions">
              <Suspense fallback={<Progress />}>
                <BusinessFunctionResourceActions />
              </Suspense>
            </Route>
            <Route path="/admin/users">
              <Suspense fallback={<Progress />}>
                <Users />
              </Suspense>
            </Route>
            <Route path="/admin/roles">
              <Suspense fallback={<Progress />}>
                <Roles />
              </Suspense>
            </Route>
            <Route path="/admin/roleBusinessFunctionGroups">
              <Suspense fallback={<Progress />}>
                <RoleBusinessFunctionGroups />
              </Suspense>
            </Route>
            <Route path="/admin/userRoles">
              <Suspense fallback={<Progress />}>
                <UserRoles />
              </Suspense>
            </Route>
            <Route path="/admin">
              <Suspense fallback={<Progress />}>
                <Actions />
              </Suspense>
            </Route>
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};
