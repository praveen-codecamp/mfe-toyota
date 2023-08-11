import * as Acl from "acljs";
var permissions = {
  roles: [
    { name: "user" },
    { name: "Chief Manager", parent: "user" },
    { name: "admin", parent: "user" },
    { name: "Super Admin" },
  ],
  resources: [
    { name: "admin" },
    { name: "organizations" },
    { name: "roles" },
    { name: "users" },
    { name: "actions" },
    { name: "businessFunctions" },
    { name: "dynamicdashboard" },
    { name: "Marketing" },
    { name: "Campaigns" },
    { name: "Manufacturing" },
    { name: "Sales" },
    { name: "account" },
    { name: "payment" },
    { name: "Single Payments" },
    { name: "Authorize Payments" },
    { name: "Manage Single Payments" },
    { name: "Standing Orders" },
    { name: "Manage Bulk Payments" },
    { name: "Manage Beneficiaries" },
  ],
  rules: [
    {
      access: "allow",
      role: "user",
      privileges: ["view"],
      resources: ["dynamicdashboard", "account", "payment"],
    },
    {
      access: "allow",
      role: "Chief Manager",
      privileges: ["view", "create", "edit", "delete"],
      resources: [
        "organizations",
        "roles",
        "users",
        "actions",
        "businessFunctions",
        "Marketing",
        "Campaigns",
        "Manufacturing",
        "Sales",
      ],
    },
    {
      access: "allow",
      role: "admin",
      privileges: ["view", "create", "edit", "delete"],
      resources: [
        "organizations",
        "roles",
        "users",
        "actions",
        "businessFunctions",
        "Marketing",
        "Campaigns",
        "Manufacturing",
        "Sales",
      ],
    },
    {
      access: "allow",
      role: "Super Admin",
      privileges: null,
      resources: null,
    },
  ],
};
let acl = {}; //new Acl(permissions);

export const setACLPermission = (data) => {
  console.log("setACLPermission", data);
  const uniqueData = {
    ...data,
    resources: data.resources.filter(
      (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
    ),
  };
  console.log("setACLPermission uniqueData", uniqueData);
  acl = new Acl(uniqueData);
};
export const isAllowed = (role, resource, privilege) => {
  console.log("isAllowed::", role, resource, privilege);
  let result = false;
  try {
    result = acl.isAllowed(role, resource, privilege);
  } catch (ex) {
    //console.log(ex);
  }
  console.log(result);
  return result;
};
export { acl };
