import React from "react";
import Navbar from "../Navbar/Navbar";
import { Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import CoinCard from "../CoinCard/CoinCard";
import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { Grid } from "@material-ui/core";
import Balances from "../Balances/Balances";
import { Link } from "react-router-dom";

const Dashboard = ({ user, setSymbol, setName }) => {
  const CustomColor = withStyles({
    root: {
      fontSize: 24,
      background: "-webkit-linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })(Typography);

  const useStyles = makeStyles({
    dash: {
      height: "100%",
      width: "100%",
    },
    divider: {
      backgroundColor: "#1288E8",
      height: 2,
      width: "95%",
      marginTop: 10,
      marginBottom: 10,
    },
    dividerContainer: {
      display: "flex",
      justifyContent: "center",
    },
    header: {
      marginLeft: 40,
      marginTop: 20,
    },
    balances: {
      background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)",
      boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.25)",
      marginLeft: 40,
      width: "35vw",
      height: "70vh",
      borderRadius: "5px",
    },
    date: {
      height: 150,
      display: "flex",
      alignItems: "center",
      marginLeft: 40,
    },
    info: {
      display: "flex",
    },
    coinGrid: {
      width: "45vw",
      height: "65vh",
      borderRadius: "5px",
      marginLeft: 40,
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  });

  const classes = useStyles();

  console.log(user);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = new Date();

  const [wallet, setWallet] = useState([]);

  console.log("userId", user.id);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await apiClient.getCoinWallet(user.id);
      console.log("data", data.Wallet.coins);
      const result = data.Wallet.coins;
      if (data) {
        setWallet(result);
      }
    };
    fetchCoins();
  }, []);

  return (
    <div className={classes.dash}>
      <Navbar />
      <div className="mainScreen">
        <CustomColor variant="h5" className={classes.header}>
          {user.username + "'s Dashboard"}
        </CustomColor>
        <div className={classes.dividerContainer}>
          <Divider className={classes.divider} />
        </div>
        <div className={classes.date}>
          <Typography variant="h6">{`${days[today.getDay()]} ${
            months[today.getMonth()]
          } ${today.getDate()}, ${today.getFullYear()}`}</Typography>
        </div>
        <div className={classes.info}>
          <div className={classes.balances}>
            <Balances user={user} wallet={wallet} />
          </div>
          <div className={classes.coinGrid}>
            <Grid container spacing={7}>
              {wallet.map((coin) => (
                <Grid item sm={12} md={6}>
                  <Link
                    className={classes.link}
                    to={"/coin/" + coin.symbol}
                    onClick={() => {
                      setSymbol(coin.symbol);
                      setName(coin.name);
                    }}
                  >
                    <CoinCard
                      name={coin.name}
                      symbol={coin.symbol}
                      amount={coin.amount}
                      color={coin.color}
                      id={coin.id}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
