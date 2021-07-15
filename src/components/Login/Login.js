import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { InputBase, Button, makeStyles } from "@material-ui/core";
import apiClient from "../Services/apiClient";
import { Typography } from "@material-ui/core";

const Login = ({ user, setUser }) => {
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
    },
    title: {
      marginTop: 60,
      marginBottom: 50,
    },
  });

  const classes = useStyles();

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
  });

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.username) {
      navigate("/tutorial");
    }
  }, [user, navigate]);

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    const { data, error } = await apiClient.loginUser({
      usernameOrEmail: form.usernameOrEmail,
      password: form.password,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
    }

    setIsProcessing(false);
  };

  return (
    <div className="Login">
      <Navbar />
      <div className={classes.card}>
        <Typography variant="h3" className={classes.title}>
          Sign In
        </Typography>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <form noValidate autoComplete="off" className="login-form">
            <InputBase
              label="usernameOrEmail"
              variant="standard"
              name="usernameOrEmail"
              placeholder="Username or Email"
              value={form.usernameOrEmail}
              onChange={handleOnInputChange}
              fullWidth
              className={classes.input}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <InputBase
              label="Password"
              variant="standard"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
              fullWidth
              className={classes.input}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <Button disabled={isProcessing} onClick={handleOnSubmit} variant="contained" className={classes.loginBtn}>
              {isProcessing ? "Loading..." : "Login"}
            </Button>
          </form>
        </div>

        <div className="footer">
          <Typography variant="body1" className={classes.registerText}>
            Don't have an account? Sign up{" "}
            <Link style={{ color: "white", fontWeight: "bold" }} to="/register">
              HERE
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
