const logisticsData = [
  {
    number: "1",
    firstDestination: "04 Bangpiee",
    tentativeKakudai: "Yes",
    assigned: "06 Suwin66",
    unAssigned: "Firm order",
    status: "Active",
    plant: "A Gateway",
  },
  {
    number: "2",
    firstDestination: "04 Bangpiee",
    tentativeKakudai: "No",
    assigned: "06 Suwin66",
    unAssigned: "Firm order",
    status: "Active",
    plant: "C Gateway",
  },
  {
    number: "3",
    firstDestination: "03 Bangpiee",
    tentativeKakudai: "Yes",
    assigned: "09 Suwin66",
    unAssigned: "Firm order",
    status: "InActive",
    plant: "C Gateway",
  },
];
export const filterLogisticsData = (value) => {
  console.log("value", value);
  if (!value) return logisticsData;
  return logisticsData.filter((item) => item.plant.indexOf(value) != -1);
};
