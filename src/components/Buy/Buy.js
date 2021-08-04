import { Link } from "react-router-dom";
import { InputBase, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import apiClient from "../Services/apiClient";
import useExchange from "../../hooks/useExchange";
import { useState, useEffect } from "react";

const Buy = ({ symbol }) => {
  // custom hook handles all login logic
  const type = 0;

  const { state, setState, handleOnSubmit, handleOnInputChange, form, errors, isProcessing, classes } = useExchange({
    symbol,
    type,
  });

  useEffect(() => {
    let price = 0.0;

    apiClient.getCoinCurrentPrice(state.symbol).then((res) => {
      if (res.data === null) {
        console.log("#21 Buy.js Error:", res);
        setTimeout(
          apiClient.getCoinCurrentPrice(state.symbol).then((res2) => {
            if (res2.data === null) {
              console.log("#22 Buy.js Error:", res2);
              price = 0;
            } else {
              price = Number(res2.data.data).toFixed(2);
            }
          }),
          3000
        );
      } else {
        price = Number(res.data.data).toFixed(2);
      }
      setState((f) => ({ ...f, ["price"]: price }));
    });
  }, []);

  return (
    <div className="Buy">
      <div className={classes.card}>
        <Typography variant="h3" className={classes.title}>
          Buy {state.symbol}
        </Typography>

        {errors.form && <span className={classes.error}>{errors.form}</span>}
        <br />

        <div className="form">
          <Typography variant="h5">{state.price && "Market Price:  $" + state.price}</Typography>
          <Typography variant="h5">{state.text && "Estimated Cost:  $" + state.text}</Typography>
          <form noValidate autoComplete="off" className="login-form">
            <InputBase
              label="quantity"
              variant="standard"
              name="quantity"
              placeholder={"Amount in " + state.symbol}
              value={form.quantity}
              onChange={handleOnInputChange}
              fullWidth
              className={classes.input}
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <Button disabled={isProcessing} onClick={handleOnSubmit} variant="contained" className={classes.loginBtn}>
              {isProcessing ? "Loading..." : "Buy"}
            </Button>
          </form>
        </div>

        <div className="footer">
          <Typography variant="body1">
            Changed your mind? Go to{" "}
            <Link style={{ color: "white", fontWeight: "bold" }} to="/dashboard">
              Dashboard
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Buy;
