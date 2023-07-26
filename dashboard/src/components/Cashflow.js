import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import FormatedAmount from "./FormatedAmount";
import IncomeExpenseChart from "./IncomeExpenseChart";

export default ({ cashflow }) => {
  const renderSelect = () => {
    return (
      <div className="flex max-w-fit flex-col">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select month" />
            <SelectContent position="popper">
              <SelectItem value="06">Last Month</SelectItem>
              <SelectItem value="05">May</SelectItem>
              <SelectItem value="04">April</SelectItem>
              <SelectItem value="03">March</SelectItem>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
    );
  };
  const renderTable = () => {
    return (
      <Table className="max-w-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Daily</TableHead>
            <TableHead className="text-center">Weekly</TableHead>
            <TableHead className="text-right">Monthly</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormatedAmount amount={cashflow.daily} />
            </TableCell>
            <TableCell className="text-center">
              <FormatedAmount amount={cashflow.weekly} />
            </TableCell>
            <TableCell className="text-right">
              <FormatedAmount amount={cashflow.monthy[0]} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>
          <div className=" flex flex-row justify-between">
            <div className=" pt-1">Cashflow</div>
            <div>
              <Link
                className={buttonVariants({
                  size: "arrow",
                })}
                to={"/account/balance"}
              >
                <ArrowRight />
                <span className="sr-only">Cashflow Details</span>
              </Link>
            </div>
          </div>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>{renderTable()}</CardContent>
      <CardFooter>
        <div className=" flex flex-col min-w-full gap-12">
          <div>{renderSelect()}</div>
          <div>
            <IncomeExpenseChart cashflow={cashflow} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
