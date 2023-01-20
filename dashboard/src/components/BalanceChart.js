import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  SplineSeries,
  ScatterSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { symbol, symbolStar } from "d3-shape";
import { Animation, EventTracker } from "@devexpress/dx-react-chart";

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

const Point = (type, styles) => (props) => {
  const { arg, val, color } = props;
  return (
    <path
      fill={color}
      transform={`translate(${arg} ${val})`}
      d={symbol()
        .size([10 ** 2])
        .type(type)()}
      style={styles}
    />
  );
};

const StarPoint = Point(symbolStar, {
  stroke: "white",
  strokeWidth: "1px",
});

const LineWithStarPoint = (props) => {
  const { coordinates } = props;
  return (
    <React.Fragment>
      <SplineSeries.Path {...props} coordinates={coordinates} />
      <ScatterSeries.Path {...props} pointComponent={StarPoint} />
    </React.Fragment>
  );
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
            valueField="balance"
            argumentField="month"
            seriesComponent={LineWithStarPoint}
          />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}
