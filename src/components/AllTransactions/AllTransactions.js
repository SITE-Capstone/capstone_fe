import { Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState, useContext } from "react";
import apiClient from "../Services/apiClient";
import { useLocation } from "react-router-dom";
import UserContext from "../../hooks/userContext";
import Dialog from "./Dialog";
import SoldDialog from "./SoldDialog";

const AllTransactions = ({ transactions, setTransactions }) => {
  const user = useContext(UserContext);

  const location = useLocation();
  let buyingId;

  if (location.pathname === "/coin/ADA") {
    buyingId = "ada";
  } else if (location.pathname === "/coin/BTC") {
    buyingId = "btc";
  } else if (location.pathname === "/coin/DOGE") {
    buyingId = "doge";
  } else if (location.pathname === "/coin/ETH") {
    buyingId = "eth";
  } else if (location.pathname === "/coin/DOT") {
    buyingId = "dot";
  } else if (location.pathname === "/coin/XMR") {
    buyingId = "xmr";
  }

  useEffect(() => {
    const fetchAllTransactions = async () => {
      console.log("buying id", buyingId);
      const { data } = await apiClient.getAllTransactions(buyingId);
      if (data) {
        console.log("data from transactions", data.transactions);
        setTransactions(data.transactions);
      }
    };
    fetchAllTransactions();
  }, [user]);

  const useStyles = makeStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 320px)",
      marginTop: 30,
      justifyContent: "center",
    },
    btn: {
      color: "white",
      background: "#5FB2FF",
      marginBottom: 16,
      marginTop: 16,
      "&:hover": {
        background: "#018FFF !important",
      },
    },
    boughtCard: {
      border: "2px solid rgb(138,246, 138,.85)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 8,
      alignItems: "center",
    },
    soldCard: {
      border: "2px solid rgb(246,138,138,.85)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 8,
      alignItems: "center",
    },
    bought: {
      color: "rgb(138,246, 138,.85)",
    },
    sold: {
      color: "rgb(246,138,138,.85)",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {transactions.map((element) =>
        element.buying_id === buyingId ? (
          <div className={classes.boughtCard}>
            <Typography variant="body1" className={classes.bought}>
              {"Bought " + buyingId.toUpperCase() + " on " + new Date(element.created_at).toLocaleString()}
            </Typography>
            <Dialog
              buyingId={buyingId}
              totalPrice={element.selling_quantity}
              amount={element.buying_quantity}
              time={element.created_at}
            />
          </div>
        ) : (
          <div className={classes.soldCard}>
            <Typography variant="body1" className={classes.sold}>
              {"Sold " + buyingId.toUpperCase() + " on " + new Date(element.created_at).toLocaleString()}
            </Typography>
            <SoldDialog
              buyingId={buyingId}
              totalPrice={element.buying_quantity}
              amount={element.selling_quantity}
              time={element.created_at}
            />
          </div>
        )
      )}
    </div>
  );
};

export default AllTransactions;
