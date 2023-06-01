export const formatAmount = (amount) =>
  amount ? amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") : "0.00";

export const formatedDate = () => {
  const date = new Date();
  //date.getFullYear() + "-0" + (date.getMonth() + 1) + "-0" + date.getDate()
  return date.toISOString().split("T")[0];
};
