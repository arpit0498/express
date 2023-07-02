import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginInput, setLoginInput, loginHandler } = useContext(AuthContext);
  const { setEncodedToken } = useContext(DataContext);

  const creds = { username: "arpit", password: "2023" };

  useEffect(() => {
    setLoginInput({ username: "", password: "" });
  }, []);

  useEffect(() => {
    localStorage.clear();
    setEncodedToken("");
  }, []);

  return (
    <div className="home-main">
      <div className="home-container">

        <div className="login">
          <div className="login-container">
            <h1>
              <span className="text-primary">Gym</span>
              <span className="text-secondary-dark">Express</span>

            </h1>
            <div className="login-form">
              <label>Username:</label>
              <input
                type="text"
                value={loginInput.username}
                placeholder="Enter username for login"
                onChange={(e) =>
                  setLoginInput({ ...loginInput, username: e.target.value })
                }
              />
              <div className="password-container">
                <label htmlFor="">password:</label>
                <div className="input-pass-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginInput.password}
                    placeholder="Enter password"
                    onChange={(e) =>
                      setLoginInput({ ...loginInput, password: e.target.value })
                    }
                    className="input-password"
                  />{" "}
                  <span
                    id="password-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                </div>
              </div>
              {/* <div className="login-buttons"> */}
              <button
                className="btn-primary"
                onClick={() => loginHandler(loginInput)}
              >
                Login
              </button>

              <button
                id="btn-primary"
                className="btn-primary"
                onClick={() => {
                  setLoginInput(creds);
                  loginHandler(creds);
                }}
              >
                {" "}
                Login as Guest
              </button>

              {/* </div> */}
              <div className="signup-nav">
                Don't have an account?{" "}
                <NavLink to="/signup">Sign up here</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
