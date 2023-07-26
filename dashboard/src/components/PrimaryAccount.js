import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import FormatedAmount from "./FormatedAmount";

export default ({ account }) => {
  return (
    <>
      <Card className="w-[650px] min-w-full">
        <CardHeader>
          <CardTitle>
            <div className=" flex flex-row justify-between">
              <div className="pt-1">Primary Account</div>
              <div>
                <Link
                  className={buttonVariants({
                    size: "arrow",
                  })}
                  to={"/account/balance/" + account.accountNo}
                >
                  <ArrowRight />
                  <span className="sr-only">Primary Account Details</span>
                </Link>
              </div>
            </div>
          </CardTitle>
          <CardDescription>{account.accountNo}</CardDescription>
        </CardHeader>
        <CardContent className=" mt-11">
          <div className=" flex lg:flex-col flex-row gap-4 justify-between">
            <div>
              Available Fund{" "}
              <p>
                <FormatedAmount amount={account.balance} isbold />
              </p>
            </div>
            <div>
              <div className=" flex flex-row gap-2">
                <div>
                  <ArrowDown className=" bg-indigo-50 text-indigo-800 w-8 h-11 mt-1 rounded-sm" />
                  <span className="sr-only">Income Details</span>
                </div>
                <div>
                  Income{" "}
                  <p>
                    <FormatedAmount amount={account.cashflow.income} />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className=" flex flex-row gap-2">
                <div>
                  <ArrowUp className=" bg-orange-100 text-orange-500 w-8 h-11 mt-1 rounded-sm" />
                  <span className="sr-only">Income Details</span>
                </div>
                <div>
                  Expense{" "}
                  <p>
                    <FormatedAmount amount={account.cashflow.expense} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
