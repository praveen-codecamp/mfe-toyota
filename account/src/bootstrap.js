import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mount = (
  el,
  { onNavigate, defaultHistory, initialPath, userDetails, userPemission }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App
      history={history}
      userDetails={userDetails}
      userPemission={userPemission}
    />,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};
// If we are in development and in isolation,
// call mount immediately
//if (process.env.NODE_ENV === 'development') {
const devRoot = document.querySelector("#_account-dev-root");

if (devRoot) {
  const userDetails = {
    email: "bipin.pandey@coforge.com",
    email_verified: true,
    family_name: "Pandey",
    given_name: "Bipin",
    locale: "en_US",
    name: "Bipin Pandey",
    preferred_username: "bipin.pandey@coforge.com",
    Groups: ["Admin"],
    organization: 10000,
    role: "superAdmin",
  };
  var userPemission = {
    roles: [{ name: "superAdmin" }],
    resources: [
      { name: "account" },
      { name: "View Account Balance" },
      { name: "View Account Activity" },
      { name: "Scheduled Statement" },
      { name: "Account Services" },
    ],
    rules: [
      {
        access: "allow",
        role: "superAdmin",
        privileges: null,
        resources: null,
      },
    ],
  };
  mount(devRoot, {
    defaultHistory: createBrowserHistory(),
    userDetails,
    userPemission,
  });
}
//}

// We are running through container
// and we should export the mount function
export { mount };
