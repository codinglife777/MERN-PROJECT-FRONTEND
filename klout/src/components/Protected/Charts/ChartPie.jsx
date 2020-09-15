import { Chart } from "react-google-charts";
import * as React from "react";

 

 
const ExampleChart = () => {
  return (
    <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Facebook", 3.5],
            ["Instagram", 2],
            ["Twitter", 2.9],
            ["Linkedin", 3.1],
         
          ]}
          options={{
            title: "Networks",
            is3D: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
  );
};
 
export default ExampleChart;