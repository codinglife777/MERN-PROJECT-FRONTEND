import { Chart } from "react-google-charts";
import * as React from "react";

const ChartRange = () => {
  return (
    <Chart
      chartType="ScatterChart"
      width={"100%"}
      height={"400px"}
      data={[
        ["x", "Rate"],
        [1, 84],
        [2, 88],
        [3, 75],
        [4, 80],
        [5, 90],
        [6, 85],
        [7, 80],
        [8, 75],
        [9, 90],
        [10, 84],
        [11, 50],
        [12, 85],
      ]}
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 1) {
              const [selectedItem] = selection;
              const dataTable = chartWrapper.getDataTable();
              const { row, column } = selectedItem;
              alert(
                "You selected : " +
                  JSON.stringify({
                    row,
                    column,
                    value: dataTable.getValue(row, column),
                  }),
                null,
                2
              );
            }
            console.log(selection);
          },
        },
      ]}
    />
  );
};

export default ChartRange;
