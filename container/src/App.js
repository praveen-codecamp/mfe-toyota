import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";
import Header from "./components/Header";
import Home from "./components/Home";

const AuthLazy = lazy(() => import("./components/AuthApp"));
const AccountLazy = lazy(() => import("./components/AccountApp"));
const PaymentLazy = lazy(() => import("./components/PaymentApp"));
const PreferencesLazy = lazy(() => import("./components/PreferencesApp"));
const AdminLazy = lazy(() => import("./components/AdminApp"));

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/account/balance");
    } else {
      history.push("/");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <div>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Switch>
          <Route path="/auth">
            <Suspense fallback={<Progress />}>
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Suspense>
          </Route>
          <Route path="/payment">
            <Suspense fallback={<Progress />}>
              <PaymentLazy />
            </Suspense>
          </Route>
          <Route path="/preferences">
            <Suspense fallback={<Progress />}>
              <PreferencesLazy />
            </Suspense>
          </Route>
          <Route path="/admin">
            <Suspense fallback={<Progress />}>
              <AdminLazy />
            </Suspense>
          </Route>
          <Route path="/account">
            <Suspense fallback={<Progress />}>
              <AccountLazy />
            </Suspense>
          </Route>
          <Route path="/">
            <Home
              onSignOut={() => setIsSignedIn(false)}
              isSignedIn={isSignedIn}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
