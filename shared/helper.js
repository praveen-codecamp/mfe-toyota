export const formatAmount = (amount) =>
  amount ? amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") : "0.00";
