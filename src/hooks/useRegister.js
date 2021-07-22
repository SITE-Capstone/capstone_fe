import { makeStyles } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import apiClient from "../components/Services/apiClient";
import UserContext from "./userContext";

function useRegister({ setUser }) {
  const user = useContext(UserContext);

  const useStyles = makeStyles({
    input: {
      color: "black",
      fontSize: "18px",
      backgroundColor: "white",
      borderRadius: "8px",
      height: "57px",
      margin: "20px 0 20px 0",
    },
    registerBtn: {
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
    name: {
      display: "flex",
      justifyContent: "space-between",
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
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.username) {
      navigate("/tutorial");
    }
  }, [user, navigate]);

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    const { data, error } = await apiClient.signupUser({
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      email: form.email,
      password: form.password,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
    }

    setIsProcessing(false);
  };

  return {
    handleOnSubmit,
    handleOnInputChange,
    form,
    errors,
    isProcessing,
    classes,
  };
}

export default useRegister;
