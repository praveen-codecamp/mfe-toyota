import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeExpenseChart = ({ cashflow }) => {
  const [chartData, setChartData] = useState({
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "AED ",
        data: [cashflow.income, cashflow.expense],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  });
  useEffect(() => {
    setChartData({
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "AED ",
          data: [cashflow.income, cashflow.expense],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        },
      ],
    });
  }, [cashflow]);
  return (
    <div className="w-[210px]">
      <Doughnut data={chartData} options={{ cutout: 70 }} />
    </div>
  );
};
export default IncomeExpenseChart;
