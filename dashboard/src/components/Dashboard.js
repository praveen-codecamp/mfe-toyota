import React, { useState } from "react";
import AnnouncmentsCarousel from "./AnnouncmentsCarousel";
import PrimaryAccount from "./PrimaryAccount";
import AccountStack from "./AccountStack";
import Cashflow from "./Cashflow";
import LatestTransactions from "./LatestTransactions";
import { getAccountDetails } from "../../../shared/constants";

export default ({ userDetails }) => {
  const accounts = getAccountDetails(userDetails?.organization);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);

  return (
    <>
      <div className="flex mt-20 mx-4 lg:flex-col flex-row gap-4 justify-between">
        <div className="flex-1">
          <AnnouncmentsCarousel />
        </div>
        <div className="flex-1">
          <PrimaryAccount account={accounts[0]} />
        </div>
      </div>
      <div className="flex mt-4 mx-4 lg:flex-col flex-row gap-4 justify-between">
        <div className="flex-1">
          <AccountStack
            accounts={accounts}
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
          />
        </div>
      </div>
      <div className="flex m-4 lg:flex-col flex-row gap-4 justify-between">
        <div className="flex-1">
          <Cashflow cashflow={selectedAccount.cashflow} />
        </div>
        <div className="flex-1">
          <LatestTransactions transactions={selectedAccount.transactions} />
        </div>
      </div>
    </>
  );
};
