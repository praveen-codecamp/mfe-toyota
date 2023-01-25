import React from "react";
// component
import Iconify from "../Iconify";

// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} width={30} height={30} />;

const navConfig = [
  {
    title: "View Account Balance",
    path: "/account/balance",
    icon: icon("material-symbols:account-balance-wallet"),
  },
  {
    title: "View Account Activity",
    path: "/account/activity",
    icon: icon("mdi:bank-transfer"),
  },
  {
    title: "Scheduled Statement",
    path: "/account/statement",
    icon: icon("fluent-mdl2:account-activity"),
  },
  {
    title: "Account Services",
    path: "/account/services",
    icon: icon("icons8:services"),
  },
];

export default navConfig;
