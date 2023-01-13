import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  PieSeries,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { type: " Positive", val: 30 },
  { type: "Negative", val: 10 },
  { type: "Nuetral", val: 20 },
];
const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);
const Label = (props) => (
  <Legend.Label {...props} sx={{ whiteSpace: "nowrap" }} />
);
export default class NewsFeedChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <PieSeries
            valueField="val"
            argumentField="type"
            outerRadius={0.6}
            innerRadius={0.4}
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
        </Chart>
      </Paper>
    );
  }
}
