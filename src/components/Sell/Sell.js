import { Link } from "react-router-dom";
import { InputBase, Button, Icon } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import apiClient from "../Services/apiClient";
import useExchange from "../../hooks/useExchange";
import { useState, useEffect } from "react";

const Sell = ({ symbol }) => {
  const type = 1;

  const { state, setState, handleOnSubmit, handleOnInputChange, form, errors, isProcessing, classes, quantities } =
    useExchange({
      symbol,
      type,
    });

  useEffect(() => {
    let price = 0.0;

    apiClient.getCoinCurrentPrice(state.symbol).then((res) => {
      if (res.data === null) {
        console.log("#21 Sell.js Error:", res);
        setTimeout(
          apiClient.getCoinCurrentPrice(state.symbol).then((res2) => {
            if (res2.data === null) {
              console.log("#22 Sell.js Error:", res2);
              price = 0;
            } else {
              price = Number(res2.data.data);
            }
          }),
          3000
        );
      } else {
        price = Number(res.data.data);
      }
      setState((f) => ({ ...f, ["price"]: price }));
    });
  }, []);

  return (
    <div className="Sell">
      <Link to={"/coin/" + symbol}>
        <Icon className={classes.back}>arrow_circle_up</Icon>
      </Link>
      <div className={classes.card}>
        <Typography variant="h3" className={classes.title}>
          Sell {state.symbol}
        </Typography>

        {errors.form && <span className={classes.error}>{errors.form}</span>}
        <br />

        <div className="form">
          <Typography style={{ color: "#5FB2FF" }} variant="h5">
            {quantities[0]}
          </Typography>
          <Typography style={{ color: "#5FB2FF" }} variant="h5">
            {quantities[1]}
          </Typography>
          <Typography variant="h5">{state.price && "Market Price:  $" + state.price}</Typography>
          <Typography variant="h5">{state.text && "Estimated Cost:  $" + state.text}</Typography>
          <form noValidate autoComplete="off" className="login-form">
            <InputBase
              label="quantity"
              type="number"
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
              {isProcessing ? "Loading..." : "Sell"}
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

export default Sell;
