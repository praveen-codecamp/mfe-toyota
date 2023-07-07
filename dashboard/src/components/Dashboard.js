import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AnnouncmentsCarousel from "./AnnouncmentsCarousel";
import PrimaryAccount from "./PrimaryAccount";
import AccountStack from "./AccountStack";
import Cashflow from "./Cashflow";
import LatestTransactions from "./LatestTransactions";
import { isAuthrized } from "./authConfig";
import { getAccountDetails } from "../../../shared/constants";
import { Button } from "../../components/ui/button";

export default ({ userDetails }) => {
  const accounts = getAccountDetails(userDetails?.organization);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const isModuleAuthorized = (module) => isAuthrized(module, userDetails);
  const showAccount = isModuleAuthorized("Account");
  const showPayments = isModuleAuthorized("Payments");
  return (
    <div
      style={{
        marginTop: 80,
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={5}>
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
          <AnnouncmentsCarousel />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <PrimaryAccount account={accounts[0]} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AccountStack
            accounts={accounts}
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Cashflow cashflow={selectedAccount.cashflow} />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <LatestTransactions transactions={selectedAccount.transactions} />
        </Grid>
      </Grid>
    </div>
  );
};
