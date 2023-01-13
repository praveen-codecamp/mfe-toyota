import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  AreaSeries,
  ValueAxis,
  LineSeries,
  SplineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { curveCatmullRom, area } from "d3-shape";
import { Animation } from "@devexpress/dx-react-chart";

const balanceMonths = [
  {
    month: "Aug",
    balance: 2,
  },
  {
    month: "Sep",
    balance: 6,
  },
  {
    month: "Oct",
    balance: 4,
  },
  {
    month: "Nov",
    balance: 3,
  },
  {
    month: "Dec",
    balance: 8,
  },
  {
    month: "Jan",
    balance: 6,
  },
];

const Area = (props) => {
  const path = area()
    .x(({ arg }) => arg)
    .y1(({ val }) => val)
    .y0(({ startVal }) => startVal)
    .curve(curveCatmullRom);

  return <AreaSeries.Path {...props} path={path} />;
};

export default class BalanceChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: balanceMonths,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData} style={{ paddingLeft: "20px" }}>
          <ArgumentAxis tickFormat={() => (tick) => tick} />
          <ValueAxis tickSize={2} tickFormat={() => (tick) => tick + " mil"} />
          <SplineSeries
            name="Balance"
            valueField="balance"
            argumentField="month"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
