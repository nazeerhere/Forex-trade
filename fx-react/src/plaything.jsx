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
      // for(let i=0; i<chartdata.length; i++) {
      //   if(chartdata[i] < min) {
      //     setMin(chartdata[i][1])
      //   }
      // }
      // for(let i=0; i<chartdata.length; i++) {
      //   if(chartdata[i] > max) {
      //     setMax(chartdata[i][4])
      //   }
      // }
      setMin(chartdata[0][1])
      setMax(chartdata[0][4])
      console.log(chartdata[0])
      console.log(chartdata[0][1])
      console.log(chartdata[0][4])
      // let min = chartdata[0][1]
      // let max = chartdata[0][4]
    })

    // .then(res => console.log(candleData))
    
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
            viewWindow: { min: 0, max: 20 },
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
