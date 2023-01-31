import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";
import Header from "./components/Header";
import Home from "./components/Home";
import JitsiMeet from "./components/JitsiMeet";

import ReactGA from "react-ga4";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize("G-1W6TXYV2HD");
ReactGA.send("pageview");

const AuthLazy = lazy(() => import("./components/AuthApp"));
const AccountLazy = lazy(() => import("./components/AccountApp"));
const PaymentLazy = lazy(() => import("./components/PaymentApp"));
const PreferencesLazy = lazy(() => import("./components/PreferencesApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const AdminLazy = lazy(() => import("./components/AdminApp"));

const history = createBrowserHistory();

const theme = createTheme(theme, {
  palette: {
    primary: {
      light: "#cd2026",
      main: "#cd2026",
      dark: "#981b1e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#cd2026",
    },
    custom: {
      light: "#cd2026",
      main: "#cd2026",
      dark: "#981b1e",
      contrastText: "#ffffff",
    },
  },
});
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export default () => {
  const username = getCookie("isSignedIn");
  const [isSignedIn, setIsSignedIn] = useState(username || false);

  const handlerSignedin = (isSignedIn) => {
    setCookie("isSignedIn", isSignedIn, isSignedIn ? 1 : -1);
    setIsSignedIn(isSignedIn);
    if (isSignedIn) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div>
          <Header
            onSignOut={() => handlerSignedin(false)}
            isSignedIn={isSignedIn}
          />
          <Switch>
            <Route path="/auth">
              <Suspense fallback={<Progress />}>
                <AuthLazy onSignIn={() => handlerSignedin(true)} />
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
            <Route path="/dashboard">
              <Suspense fallback={<Progress />}>
                <DashboardLazy />
              </Suspense>
            </Route>
            <Route path="/meet/:username">
              <JitsiMeet />
            </Route>
            <Route path="/meet">
              <JitsiMeet />
            </Route>
            <Route path="/">
              {isSignedIn ? (
                <Suspense fallback={<Progress />}>
                  <DashboardLazy />
                </Suspense>
              ) : (
                <Home
                  onSignOut={() => handlerSignedin(false)}
                  isSignedIn={isSignedIn}
                />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};
