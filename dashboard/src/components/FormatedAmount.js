import React from "react";
import { defaultCurrency } from "../../../shared/constants";
import { formatAmount } from "../../../shared/helper";

const FormatedAmount = ({ amount, isbold }) => {
  const formatedAmount = formatAmount(amount);
  const fix = formatedAmount.split(".")[0];
  const dec = formatedAmount.split(".")[1];
  return (
    <>
      <span className=" text-xs text-muted-foreground">
        {defaultCurrency.symbol}
      </span>{" "}
      <span className={`text-sm ${isbold ? "font-semibold" : ""}`}>
        {fix + "."}
      </span>
      <span className={`text-xs ${isbold ? "font-semibold" : ""}`}>{dec}</span>
    </>
  );
};
export default FormatedAmount;
