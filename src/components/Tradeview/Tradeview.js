import React from "react";
import { Link } from "react-router-dom";
import apiClient from '../Services/apiClient'
import Chart from "../Chart/Chart";
import Coinheader from "../Coinheader/Coinheader";
import About from "../About/About"
import Statistics from "../Statistics/Statistics";
import Exchanges from "../Exchanges/Exchanges";
import News from "../News/News";
import "./Tradeview.css";

function Tradeview() {
  apiClient.getCoinData()
  return (
    <div className="Tradeview">
        <Link style={{ color: "white", fontWeight: "bold" }} to="/dashboard">Back</Link>
        <Chart />
        <Coinheader />
        <About />
        <Statistics />
        <Exchanges />
        <News />
    </div>
  );
}

export default Tradeview;
