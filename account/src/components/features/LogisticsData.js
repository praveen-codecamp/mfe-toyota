const logisticsData = [
  {
    number: "1",
    firstDestination: "04 Bangpiee",
    tentativeKakudai: "Yes",
    assigned: "06 Suwin66",
    unAssigned: "Firm order",
    status: "Active",
    plant: "A Gateway",
    modelNumber: "Z-SEE1213",
  },
  {
    number: "2",
    firstDestination: "04 Bangpiee",
    tentativeKakudai: "No",
    assigned: "06 Suwin66",
    unAssigned: "Firm order",
    status: "Active",
    plant: "C Gateway",
    modelNumber: "X-SEE1213",
  },
  {
    number: "3",
    firstDestination: "03 Bangpiee",
    tentativeKakudai: "Yes",
    assigned: "09 Suwin66",
    unAssigned: "Firm order",
    status: "InActive",
    plant: "C Gateway",
    modelNumber: "P-SEE1213",
  },
];
export const filterLogisticsData = ({ modelNumber, plantNumber }) => {
  console.log("value", modelNumber, plantNumber);
  if (!modelNumber && !plantNumber) return logisticsData;
  return logisticsData.filter((item) => {
    if (plantNumber && item.plant.toLowerCase() === plantNumber.toLowerCase()) {
      return item;
    }
    if (
      modelNumber &&
      item.modelNumber.toLowerCase() === modelNumber.toLowerCase()
    ) {
      return item;
    }
  });
};
