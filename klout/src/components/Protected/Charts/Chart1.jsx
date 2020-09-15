import { Chart } from "react-google-charts";
import * as React from "react";

 
const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};
const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];
 
const ExampleChart = () => {
  return (
    <Chart
      chartType="ScatterChart"
      data={data}
      options={options}
      width="80%"
      height="400px"
      legendToggle
    />
  );
};
 
export default ExampleChart;