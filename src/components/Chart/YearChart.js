import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Data } from "../Data/Data";
import apiClient from "../Services/apiClient";
import { Typography, makeStyles } from "@material-ui/core";

const black = ["rgb(0,0,0,.85)", "rgb(0,0,0,.25)", "rgb(0,0,0,.15)"]; //#F68A8A
const red = ["rgb(246,138,138,.85)", "rgb(246,138,138,.25)", "rgb(246,138,138,.15)"]; //#F68A8A
const green = ["rgb(138,246, 138,.85)", "rgb(138,246, 138,.25)", "rgb(138,246, 138,.15)"];
const green2 = ["rgb(175, 243, 173,.85)", "rgb(175, 243, 173,.25)", "rgb(175, 243, 173,.15)"]; //#AFF3AD
let color = black;

const YearChart = ({ symbol }) => {
  const useStyles = makeStyles({
    container: {
      userSelect: "none",
    },
  });
  const classes = useStyles();

  console.log("symbol: XXXXXX", symbol);
  const [state, setState] = useState({
    chartData: Data,
    token: symbol,
    color: color,
  });

  useEffect(() => {
    apiClient.getCoinYearlyPriceHistory(symbol).then((res) => {
      let chartData = Data;
      console.log("################:", res);
      if (res.data === null) {
        console.log("#24 Chart.js Error:", res);
        setTimeout(
          apiClient.getCoinCurrentPrice(symbol).then((res2) => {
            if (res2.data === null) {
              console.log("#29 Chart.js Error:", res2);
              chartData = Data;
            } else {
              chartData = res.data.data;
            }
          }),
          3000
        );
      } else {
        chartData = res.data.data;
      }
      console.log("XXXXX", chartData);

      let open = Number(chartData[0].price);
      let close = Number(chartData[chartData.length - 1].price);
      color = black;
      if (open > close) {
        color = red;
      }
      if (close > open) {
        color = green;
      }
      chartData = chartData.map((element) => {
        return { id: element.id, price: Number(element.price), time: element.time };
      });

      setState({
        chartData: chartData,
        token: symbol,
        color: color,
      });
    });
  }, []);

  return (
    <ResponsiveContainer width="75%" height={500} className={classes.container}>
      <LineChart width={600} height={300} data={state.chartData}>
        <Line dataKey="time" type="monotone" animationDuration={2200} stroke="transparent" dot={false} key={0} />
        <Line dataKey="price" animationDuration={2200} stroke={color[0]} dot={false} key={1} />
        <Line
          dataKey="price"
          type="monotone"
          strokeWidth={2}
          animationDuration={2200}
          stroke={color[1]}
          dot={false}
          key={2}
        />
        <Line
          dataKey="price"
          type="monotone"
          strokeWidth={4}
          animationDuration={2200}
          stroke={color[2]}
          dot={false}
          key={3}
        />
        <YAxis dataKey="price" stroke="transparent" domain={[datamin=>datamin, datamax=>datamax]}/>
        <XAxis dataKey="time" stroke="transparent" />
        <Tooltip content={CustomTooltip} />
      </LineChart>
    </ResponsiveContainer>
  );
};

//Customizes the content of the Tooltip
//This custom tooltip is needed since otherwise,
//it would display the price for each line charted for glow line
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    //TODO: Insert code for updating the coin label here
    //This is to show the price at different points in time
    return (
      <div className="custom-tooltip">
        <Typography variant="h5" className="label">{`Time: ${new Date(payload[0].value).toLocaleString().split(',')[0]}`}</Typography>
        <Typography variant="h5" className="label">{`Price: ${Number(payload[1].value).toFixed(4)}`}</Typography>
      </div>
    );
  } else {
    // console.log('test')
    // We can set current live price label here
    // Once the user mouses away from the chart, it should show the default price
  }
  return null;
};

export default YearChart;
