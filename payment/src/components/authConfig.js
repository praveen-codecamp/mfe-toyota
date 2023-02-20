export const authConfig = {
  modules: {
    Admin: [
      "QuickTransfer",
      "DomesticPayment",
      "InterAccountTransfer",
      "InternationalPayment",
    ],
    QuickTransfer: ["QuickTransfer"],
    DomesticPayment: ["DomesticPayment"],
    InterAccountTransfer: ["InterAccountTransfer"],
    InternationalPayment: ["InternationalPayment"],
  },
};
export const isAuthrized = (moduleName, userDetails) => {
  let auth = false;
  userDetails?.Groups?.map((role) => {
    if (!auth && authConfig.modules[role]) {
      auth = authConfig.modules[role].find((module) => module === moduleName);
    }
  });
  return auth;
};
