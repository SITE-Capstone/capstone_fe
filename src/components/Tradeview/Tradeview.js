import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "../Services/apiClient";
import Chart from "../Chart/Chart";
import Coinheader from "../Coinheader/Coinheader";
import About from "../About/About";
import Statistics from "../Statistics/Statistics";
import Exchanges from "../Exchanges/Exchanges";
import News from "../News/News";
import "./Tradeview.css";

function Tradeview({ symbol, name }) {
  return (
    <div className="Tradeview">
      <Link style={{ color: "white", fontWeight: "bold" }} to="/dashboard">
        Back
      </Link>
      {/* <Chart symbol='BTC'/> */}
      <Coinheader symbol={symbol} />
      <About name={name} symbol={symbol} />
      <Statistics />
      <Exchanges />
      <News symbol={symbol} name={name} />
    </div>
  );
}

export default Tradeview;
