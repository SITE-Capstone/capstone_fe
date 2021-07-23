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
import { makeStyles, Icon } from "@material-ui/core";

function Tradeview({ symbol, name }) {
  const useStyles = makeStyles({
    back: {
      transform: "rotate(-90deg)",
      fontSize: 64,
      color: "rgba(255,255,255,0.5)",
    },
    link: {
      textDecoration: "none",
      color: "rgba(255,255,255,0.5)",
      alignSelf: "flex-start",
      marginBottom: "4rem",
      marginTop: "2rem",
    },
  });

  const classes = useStyles();

  return (
    <div className="Tradeview">
      <Link to="/dashboard" className={classes.link}>
        <Icon className={classes.back}>arrow_circle_up</Icon>
      </Link>
      {/* <Chart symbol={symbol} /> */}
      <Coinheader symbol={symbol} />
      <About name={name} symbol={symbol} />
      <Statistics />
      <Exchanges />
      <News symbol={symbol} name={name} />
    </div>
  );
}

export default Tradeview;
