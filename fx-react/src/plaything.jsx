import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";


const Plaything = ({ infoName, props }) => {
  const [candleData, setData] = useState([])
  const [min, setMin] = useState([])
  const [max, setMax] = useState([])

  useEffect( () => {
    fetch(`https://fcsapi.com/api-v3/forex/history?id=${props.id.id}&period1h&access_key=csQbcA47LkQXN25mV25h1cz`)
    .then(res => res.json())
  
    .then(res => {

      // console.log(res)
      const arr = Object.entries(res.response)
      const chartdata = arr.map(kv => [ kv[1]['tm'].split(" ")[1], parseFloat(kv[1]['l']) ,parseFloat(kv[1]['o']) , parseFloat(kv[1]['c']) , parseFloat(kv[1]['h']) ])
      setData(chartdata)
      var maxRow = chartdata.map(function(row){ return Math.max.apply(Math, row); });
      var max = Math.max.apply(null, maxRow);
      var minRow = chartdata.map(function(row){ return Math.min.apply(Math, row); });
      var min = Math.max.apply(null, minRow);
      setMin(min)
      setMax(max)
    })

    .catch(console.err)
  }, [props.id.id])

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={
        [["time", "low", "open", "close", "high"],
        ...candleData
      ]}
      options={
        // Chart options
        {
          title: infoName,
          fontSize: 15,
          titleTextStyle: {
            color: "silver",
          },
          hAxis: {
            title: "Time",
            titleTextStyle: {
              fontSize: 25,
              color: "darkgrey",
            },
            viewWindow: { min: 0, max: 30 },
          },
          vAxis: {
            title: "Price",
            viewWindow: { min: min, max: max },
            titleTextStyle: {
              fontSize: 25,
              color: "darkgrey"
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
