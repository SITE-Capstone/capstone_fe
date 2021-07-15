import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { TextField, Button } from "@material-ui/core";
import apiClient from "../Services/apiClient";

const Login = ({ user, setUser }) => {
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
    //   if (event.target.name === "email") {
    //     if (event.target.value.indexOf("@") === -1) {
    //       setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
    //     } else {
    //       setErrors((e) => ({ ...e, email: null }));
    //     }
    //   }

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
      <div className="card">
        <h2>Login</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <form noValidate autoComplete="off" className="login-form">
            <TextField
              label="usernameOrEmail"
              variant="standard"
              name="usernameOrEmail"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <TextField
              label="Password"
              variant="standard"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <Button
              className="btn"
              disabled={isProcessing}
              onClick={handleOnSubmit}
              variant="contained"
              fullWidth
              style={{ backgroundColor: "white" }}
            >
              {isProcessing ? "Loading..." : "Login"}
            </Button>
          </form>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
