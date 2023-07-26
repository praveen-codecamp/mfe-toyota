import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionTable({ transactions }) {
  return (
    <Table>
      {/*<TableCaption>A list of your recent transactions.</TableCaption>*/}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{transaction.date}</TableCell>
            <TableCell>
              {transaction.remark}
              <p className="text-sm text-muted-foreground">
                {transaction.account}
              </p>
            </TableCell>
            <TableCell className="text-right">{transaction.amount}</TableCell>
            <TableCell
              className={`text-right ${
                transaction.type == "dr" ? "text-red-600" : "text-green-600"
              }`}
            >
              {transaction.type}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
