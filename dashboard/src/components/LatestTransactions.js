import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import TransactionsTable from "./TransactionsTable";
//import { defaultCurrency } from "../../../shared/constants";

export default ({ transactions }) => {
  return (
    <Card className="w-[710px] min-w-full">
      <CardHeader>
        <CardTitle>Latest Transactions</CardTitle>
        <CardDescription>
          Since last week, you got 10 new transactions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionsTable transactions={transactions} />
      </CardContent>
    </Card>
  );
};
