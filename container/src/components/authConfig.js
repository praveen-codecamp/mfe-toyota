const configs = {
  oidc: {
    clientId: "0oa42dv55gc1v0lzz697",
    issuer: "https://trial-3433004.okta.com/oauth2/default",
    redirectUri: window.location.origin + "/dashboard",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: false,
    useInteractionCode: false,
  },
  pidc: {
    AUTH_URI: "https://auth.pingone.asia", // 'https://auth.pingone.eu', 'https://auth.pingone.ca' or 'https://auth.pingone.asia'
    API_URI: "https://api.pingone.asia", // 'https://api.pingone.eu', 'https://api.pingone.ca' or 'https://api.pingone.asia'
    environmentId: "99243164-0564-4ab0-8dd1-1b8701f4a0cf",
    clientId: "69ff8c67-fa02-400b-9bbb-e14a36a54dca",
    redirectUri: window.location.origin + "/dashboard",
    postLogoutRedirectUri: window.location.origin,
    scopes: ["openid", "profile", "email", "address"],
    responseType: ["token", "id_token"],
    pkce: false,
  },
  modules: {
    Admin: [
      {
        title: "Account Information",
        path: "account/balance",
      },
      {
        title: "Payments",
        path: "payment",
      },
      {
        title: "Loans",
        path: "loans",
      },
      {
        title: "Cash Management",
        path: "cashmanagement",
      },
      {
        title: "Trade Finance",
        path: "tradefinance",
      },
      {
        title: "Preferences",
        path: "preferences",
      },
    ],
    Account: [
      {
        title: "Account Information",
        path: "account/balance",
      },
    ],
    Payments: [
      {
        title: "Payments",
        path: "payment",
      },
    ],
    CashManagement: [
      {
        title: "Cash Management",
        path: "cashmanagement",
      },
    ],
    Loans: [
      {
        title: "Loans",
        path: "loans",
      },
    ],
    TradeFinance: [
      {
        title: "Trade Finance",
        path: "tradefinance",
      },
    ],
    Preferences: [
      {
        title: "Preferences",
        path: "preferences",
      },
    ],
  },
  settings: [
    {
      title: "My Profile",
      path: "profile",
    },
  ],
};

export default configs;
export const getAuthrizedPages = (userDetails) => {
  let pages = [];
  userDetails?.Groups?.map((role) => {
    if (configs.modules[role]) {
      pages = [...pages, ...configs.modules[role]];
    }
  });
  if (pages.length > 0) {
    pages = [...new Map(pages.map((item) => [item["title"], item])).values()];
  }
  return pages;
};
