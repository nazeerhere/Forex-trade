import React from "react";
import { Chart } from "react-google-charts";
import CandleStick from "./Data/CandleStick.json"

const Plaything = ({ infoName }) => {

  const arr = Object.entries(CandleStick[0])
  const chartdata = arr.map(kv => [ kv[1]['tm'].split(" ")[1], parseFloat(kv[1]['l']) ,parseFloat(kv[1]['o']) , parseFloat(kv[1]['c']) , parseFloat(kv[1]['h']) ])

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={
        [["time", "low", "open", "close", "high"],
        ...chartdata
      ]}
      options={
        // Chart options
        {
          title: infoName,
          fontSize: 12,
          titleTextStyle: {
            color: "yellow",
          },
          hAxis: {
            title: "Time",
            titleTextStyle: {
              fontSize: 25,
              color: "green",
            },
            viewWindow: { min: 0, max: 30 },
          },
          vAxis: {
            title: "Price",
            viewWindow: { min: 1.225, max: 1.231 },
            titleTextStyle: {
              fontSize: 25
            }
          },
          legend: "none",
          backgroundColor: "none",
        }
      }
      legendToggle
      rootProps={{ "data-testid": "1" }}
    />
  );
};
export default Plaything;
