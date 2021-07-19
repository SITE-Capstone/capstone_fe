import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from '../Services/apiClient'
import Chart from "../Chart/Chart";
import Coinheader from "../Coinheader/Coinheader";
import About from "../About/About"
import Statistics from "../Statistics/Statistics";
import Exchanges from "../Exchanges/Exchanges";
import News from "../News/News";
import "./Tradeview.css";

function Tradeview()  {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      // const { data, error } = await apiClient.getCoinMonthlyPriceHistory('BTC');
      const { data, error } = await apiClient.getCoinThreeMonthPriceHistory('BTC');
      // const { data, error } = await apiClient.getCoinYearlyPriceHistory('BTC');
      console.log("Tradeview", data)
      if (data) setChartData(data);
      if (error) setError(error);
    };
    fetchChartData();
  }, []);
  return (
    <div className="Tradeview">
        <Link style={{ color: "white", fontWeight: "bold" }} to="/dashboard">Back</Link>
        <Chart symbol='BTC'/>
        <Coinheader symbol='BTC'/>
        <About />
        <Statistics />
        <Exchanges />
        <News />
    </div>
  );

}

export default Tradeview;
