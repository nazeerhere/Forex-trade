import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CandleStick from "./Data/CandleStick.json"

const Plaything = ({ infoName }) => {

  const stick2 = Object.keys(CandleStick[0])[1]

  const time2 = CandleStick[0][stick2].tm.split(" ")[1]
  const date2 = CandleStick[0][stick2].tm.split(" ")[0]
  const open2 = CandleStick[0][stick2].o
  const high2 = CandleStick[0][stick2].h
  const close2 = CandleStick[0][stick2].c
  const low2 = CandleStick[0][stick2].l

  console.log(stick2)

  // let time;
  // let open;
  // let high;
  // let close;
  // let low;

  const stick1 = Object.keys(CandleStick[0])
  console.log(stick1)

  const candleArray = () => stick1.map(candy => {
  console.log(candy)
  return(
    // time = CandleStick[0][stick1].tm.split(" ")[1],
    // open = CandleStick[0][stick1].o,
    // high = CandleStick[0][stick1].h,
    // close = CandleStick[0][stick1].c,
    // low = CandleStick[0][stick1].l
    "spread love"
    )
})

  const drawCandleSticks = () => {
    console.log(Object.keys(CandleStick[0]))
    return [time2, low2, open2, close2, high2]
  }
  drawCandleSticks()

  


  const [data, setData] = useState(["time", "low", "open", "close", "high"])

  const initialState = { dataLoadingStatus: 'loading', chartData: [] }
  const rateCurrencyNames = Object.keys(CandleStick[0])
    const rateCurrencyValues = Object.values(CandleStick[0])
    const chartData = [['Currency Name', 'Currency Rate']]
    for (let i = 0; i < rateCurrencyNames.length; i++ ) {
      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
    }

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["time", "low", "open", "close", "high"],
        ["08:00:00", 1.22535, 1.22665, 1.2259, 1.227],
        [time2, low2, open2, close2, high2],
        // [candleArray(time), candleArray(low), candleArray(open), candleArray(close), candleArray(high)]

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
            viewWindow: { min: 0, max: 6 },
          },
          vAxis: {
            title: "Price",
            viewWindow: { min: 1.225, max: 1.23 },
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
