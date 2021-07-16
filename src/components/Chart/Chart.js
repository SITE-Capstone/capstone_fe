import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Data } from "../Data/Data";

const black = ["rgb(0,0,0,.85)", "rgb(0,0,0,.25)", "rgb(0,0,0,.15)"]; //#F68A8A
const red = ["rgb(246,138,138,.85)", "rgb(246,138,138,.25)", "rgb(246,138,138,.15)"]; //#F68A8A
const green = ["rgb(138,246, 138,.85)", "rgb(138,246, 138,.25)", "rgb(138,246, 138,.15)"];
const green2 = ["rgb(175, 243, 173,.85)", "rgb(175, 243, 173,.25)", "rgb(175, 243, 173,.15)"]; //#AFF3AD

const Chart = (props) => {
  console.log("CHART", props.data);
  // let Data = props.data;
  let open = Data[0].rate_open;
  let close = Data[Data.length - 1].rate_open;
  let color = black;

  // close =.0001

  if (open > close) {
    color = red;
  }
  if (close > open) {
    color = green;
  }

  const GlowLine = [
    <Line dataKey="time_open" type="monotone" animationDuration={0} stroke="transparent" dot={false} key={0} />,
    <Line dataKey="rate_open" animationDuration={2200} stroke={color[0]} dot={false} key={1} />,
    <Line
      dataKey="rate_open"
      type="monotone"
      strokeWidth={2}
      animationDuration={2200}
      stroke={color[1]}
      dot={false}
      key={2}
    />,
    <Line
      dataKey="rate_open"
      type="monotone"
      strokeWidth={4}
      animationDuration={2200}
      stroke={color[2]}
      dot={false}
      key={3}
    />,
  ];

  return (
    <ResponsiveContainer width="75%" height={500}>
      <LineChart width={600} height={300} data={Data}>
        {GlowLine}
        <YAxis dataKey="rate_open" stroke="transparent" />
        <XAxis dataKey="time_open" stroke="transparent" />
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
        <p className="label">{`Time: ${new Date(payload[0].value).toLocaleString()}`}</p>
        <p className="label">{`Price: ${payload[1].value.toFixed(4)}`}</p>
      </div>
    );
  } else {
    // console.log('test')
    // We can set current live price label here
    // Once the user mouses away from the chart, it should show the default price
  }
  return null;
};

export default Chart;
