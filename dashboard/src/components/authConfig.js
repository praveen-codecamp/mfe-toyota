export const authConfig = {
  modules: {
    Admin: ["Account", "Payments"],
    Account: ["Account"],
    Payments: ["Payments"],
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
