import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { InputBase, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import useLogin from "../../hooks/useLogin";

const Login = ({ setUser }) => {
  // custom hook handles all login logic
  const { handleOnSubmit, handleOnInputChange, form, errors, isProcessing, classes } = useLogin({ setUser });

  return (
    <div className="Login">
      <Navbar />
      <div className={classes.card}>
        <Typography variant="h3" className={classes.title}>
          Sign In
        </Typography>

        {errors.form && <span className={classes.error}>{errors.form}</span>}
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
            <Button disabled={isProcessing} onClick={handleOnSubmit} variant="contained" className={classes.btn}>
              {isProcessing ? "Loading..." : "Login"}
            </Button>
          </form>
        </div>

        <div className="footer">
          <Typography variant="body1">
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
