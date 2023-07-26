import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import FormatedAmount from "./FormatedAmount";

export default function AccountStack({
  accounts,
  selectedAccount,
  setSelectedAccount,
}) {
  const [sliceIndex, setSliceIndex] = useState(0);

  const renderCard = (account, isSelected, index) => {
    return (
      <div key={index} className={`${index > 0 ? "lg:hidden" : ""}`}>
        <Card
          className={`w-[230px] min-w-full bg-blue-50 hover:bg-white ${
            isSelected ? "bg-white" : ""
          }`}
          onClick={() => setSelectedAccount(account)}
        >
          <CardHeader>
            <CardTitle className="text-sm">
              <div className="flex flex-row justify-between">
                <div>Account Balance</div>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                  to={"/account/balance/" + account.accountNo}
                >
                  <MoreVertical className="h-3 w-3 fill-current" />
                  <span className="sr-only">Account Details</span>
                </Link>
              </div>
            </CardTitle>
            <CardDescription>
              <FormatedAmount amount={account.balance} />
            </CardDescription>
          </CardHeader>
          <Separator className="w-100 m-2" />
          <CardFooter className=" align-text-bottom">
            {account.accountNo}
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-row my-2 justify-between">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          All Account balances
        </div>
        <div className="flex flex-row gap-1">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div className="flex lg:flex-col flex-row gap-4 justify-between">
        {accounts.slice(sliceIndex, 5).map((account, index) => {
          const isSelected = selectedAccount.accountNo === account.accountNo;
          return renderCard(account, isSelected, index);
        })}
      </div>
    </>
  );
}
