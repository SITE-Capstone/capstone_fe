import { Link } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import { Typography } from "@material-ui/core";
import useRegister from "../../hooks/useRegister";
import "./Register.css";

export default function Register({ setUser }) {
  // custom hook handles all register logic
  const { handleOnSubmit, handleOnInputChange, form, errors, isProcessing, classes } = useRegister({ setUser });

  return (
    <div className="Register">
      <Navbar />
      <div className={classes.card}>
        <Typography variant="h3">Create Account</Typography>

        {errors.form && <span className={classes.error}>{errors.form}</span>}
        <br />
        {form.email.length >= 1 && <span className={classes.error}>{errors.email}</span>}

        <div className="form">
          <form noValidate autoComplete="off" className="register-form">
            <div className={classes.name}>
              <InputBase
                type="text"
                variant="standard"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleOnInputChange}
                className={classes.input}
                style={{ width: 250 }}
              />
              <InputBase
                type="text"
                variant="standard"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleOnInputChange}
                className={classes.input}
                style={{ width: 250 }}
              />
            </div>
            <div className="register-fields">
              <InputBase
                type="text"
                variant="standard"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleOnInputChange}
                className={classes.input}
                fullWidth
              />
              <InputBase
                type="email"
                variant="standard"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleOnInputChange}
                className={classes.input}
                fullWidth
              />
              <InputBase
                type="password"
                variant="standard"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleOnInputChange}
                className={classes.input}
                fullWidth
              />
            </div>
            <Button
              className={classes.registerBtn}
              disabled={isProcessing}
              onClick={handleOnSubmit}
              variant="contained"
            >
              {isProcessing ? "Loading..." : "Register"}
            </Button>
          </form>
        </div>
        <div className="footer">
          <Typography variant="body1">
            Already have an account? Login{" "}
            <Link style={{ color: "white", fontWeight: "bold" }} to="/login">
              HERE
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
