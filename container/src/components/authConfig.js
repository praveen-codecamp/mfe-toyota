import { isAllowed } from "../../../shared/acl";

const configs = {
  oidc: {
    clientId: "0oa5is5r7eaChtf9E697",
    issuer: "https://trial-3576565.okta.com/oauth2/default",
    redirectUri: window.location.origin + "/dashboard",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: false,
    useInteractionCode: false,
  },
  pidc: {
    AUTH_URI: "https://auth.pingone.com", // 'https://auth.pingone.eu', 'https://auth.pingone.ca' or 'https://auth.pingone.asia'
    API_URI: "https://api.pingone.com", // 'https://api.pingone.eu', 'https://api.pingone.ca' or 'https://api.pingone.asia'
    environmentId: "17f6230e-41dc-4029-a0a1-8af5ecd32afe",
    clientId: "77c2ef48-d08b-47a1-9cd2-5681e500f66c",
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
        path: "account",
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
      {
        title: "Admin",
        path: "admin",
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
//Acl is isAllowed for main header navigation
const resources = [
  {
    title: "Account Information",
    path: "account",
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
  {
    title: "Admin",
    path: "admin",
  },
];
export const getAuthrizedResources = (userDetails) => {
  if (!userDetails || !userDetails?.role) return [];
  return resources.filter((resource) =>
    isAllowed(userDetails.role, resource.path, "view")
  );
};
