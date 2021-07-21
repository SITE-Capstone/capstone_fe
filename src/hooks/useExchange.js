import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import apiClient from "../components/Services/apiClient";

const useExchange = ({ symbol, conversion, setConversion,type }) => {
  const useStyles = makeStyles({
    input: {
      color: "black",
      fontSize: "18px",
      backgroundColor: "white",
      borderRadius: "8px",
      height: "57px",
      margin: "35px 0 35px 0",
    },
    loginBtn: {
      marginTop: 20,
      marginBottom: 50,
      borderRadius: "25px",
      boxShadow: "0px 2px 4px rgba(85, 35, 221, 0.4)",
      height: "64px",
      width: "189px",
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
    },
    card: {
      backgroundColor: "red",
      background: "radial-gradient(50% 50% at 50% 50%, #20135C 0%, #140739 100%)",
      boxShadow: "0px 0px 8px 8px rgba(255, 255, 255, 0.25)",
      borderRadius: "25px",
      width: "703px",
      height: "730px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    title: {
      marginTop: 60,
      marginBottom: 50,
    },
    error: {
      color: "red",
      fontSize: "18px",
      fontFamily: "Roboto",
    },
  });

  const classes = useStyles();

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    quantity: "",
  });

  useEffect(() => {
    if (isPurchased) {
      navigate("/dashboard");
    }
  }, [isPurchased, navigate]);

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    let price = 0
    apiClient.getCoinCurrentPrice(symbol).then((res) => {
        if (res.data === null) {
          console.log("#18 Coinheader.js Error:", res);
          setErrors((e) => ({ ...e, form: res.error }));
          setTimeout(
            apiClient.getCoinCurrentPrice(symbol).then((res2) => {
              if (res2.data === null) {
                console.log("#22 Coinheader.js Error:", res2);
                setErrors((e) => ({ ...e, form: res.error }));
              } else {
                price = res2.data.rate.toFixed(2);
              }
            }),
            3000
          );
        } else {
          price = res.data.rate.toFixed(2);
        }    
        console.log("Price", price)
        console.log("SYmbol", symbol)
        let order=''
        if (price!==0 && parseInt(form.quantity)){
            if(type===0){
                order={
                    "buying_id": symbol.toLowerCase(),
                    "selling_id": "usd",
                    "quantity": parseInt(form.quantity),
                    "type":type,
                    "price":price
                }
            }
            else{
                order={
                    "buying_id": "usd",
                    "selling_id": symbol.toLowerCase(),
                    "quantity": parseInt(form.quantity),
                    "type":type,
                    "price":price
                }

            }

            console.log("order",order)
            apiClient.exchangeCurrencies(order).then((orderRes) =>{
                if (orderRes.data === null) {
                    console.log("#18 useExchange.js Error:", orderRes);
                    setErrors((e) => ({ ...e, form: orderRes.error }));
                    setIsProcessing(false);
                }
                else{
                    setIsProcessing(false);
                setIsPurchased(true)
                }
            })
        }
    })

  };

  return {
    handleOnSubmit,
    handleOnInputChange,
    form,
    errors,
    isProcessing,
    classes,
  };
};

export default useExchange;
