import { Link } from "react-router-dom";
// import apiClient from "../Services/apiClient";
import YearChart from "../Chart/YearChart";
import WeeklyChart from "../Chart/WeeklyChart";
import HourlyChart from "../Chart/HourlyChart";
import Coinheader from "../Coinheader/Coinheader";
import About from "../About/About";
import Statistics from "../Statistics/Statistics";
import Exchanges from "../Exchanges/Exchanges";
import News from "../News/News";
import "./Tradeview.css";
import { makeStyles, Icon } from "@material-ui/core";
import ChartToggle from "../Chart/ChartToggle";
import { useLocation } from "react-router-dom";
import AllTransactions from "../AllTransactions/AllTransactions";

function Tradeview({ symbol, name, setTutorialId }) {
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

  const location = useLocation();
  let coinData;

  if (location.pathname === "/coin/ADA") {
    coinData = {
      symbol: "ADA",
      name: "Cardano",
    };
  } else if (location.pathname === "/coin/BTC") {
    coinData = {
      symbol: "BTC",
      name: "Bitcoin",
    };
  } else if (location.pathname === "/coin/DOGE") {
    coinData = {
      symbol: "DOGE",
      name: "Dogecoin",
    };
  } else if (location.pathname === "/coin/ETH") {
    coinData = {
      symbol: "ETH",
      name: "Ethereum",
    };
  } else if (location.pathname === "/coin/DOT") {
    coinData = {
      symbol: "DOT",
      name: "Polkadot",
    };
  } else if (location.pathname === "/coin/XMR") {
    coinData = {
      symbol: "XMR",
      name: "Monero",
    };
  }

  return (
    <div className="Tradeview">
      <Link to="/dashboard" className={classes.link}>
        <Icon className={classes.back}>arrow_circle_up</Icon>
      </Link>
      <ChartToggle symbol={coinData.symbol} />
      {/* <HourlyChart symbol={symbol} /> */}
      <Coinheader symbol={coinData.symbol} />
      <About name={name} symbol={symbol} setTutorialId={setTutorialId} />
      <Statistics symbol={coinData.symbol} />
      <Exchanges />
      <News symbol={coinData.symbol} name={coinData.name} />
    </div>
  );
}

export default Tradeview;
