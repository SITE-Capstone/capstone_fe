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


  return (
    <div className="Tradeview">
        <Link style={{ color: "white", fontWeight: "bold" }} to="/dashboard">Back</Link>
        {/* <Chart symbol='BTC'/> */}
        {/* <Coinheader symbol='BTC'/> */}
        {/* <About name='bitcoin' symbol='btc'/> */}
        <Statistics />
        <Exchanges />
        <News symbol='bitcoin'/>
    </div>
  );

}

export default Tradeview;
