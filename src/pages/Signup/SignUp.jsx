import React, { useContext } from "react";
import "./Signup.css";
import "../Home/Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signupInput, setSignupInput, signupHandler } =
    useContext(AuthContext);
  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="signup-form">
          <h1>
            <span className="text-primary">Gym</span>
            <span className="text-secondary-dark">Express</span>

          </h1>
          <div className="signup-input">
            <label>First Name:</label>
            <input
              type="text"
              value={signupInput.firstname}
              onChange={(e) =>
                setSignupInput({ ...signupInput, firstname: e.target.value })
              }
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={signupInput.lastname}
              onChange={(e) =>
                setSignupInput({ ...signupInput, lastname: e.target.value })
              }
            />
            <label>Username:</label>
            <input
              type="text"
              value={signupInput.username}
              onChange={(e) =>
                setSignupInput({ ...signupInput, username: e.target.value })
              }
            />
            <label>Password:</label>
            <div className="pass-label">
              <input
                type={showPassword ? "text" : "password"}
                value={signupInput.password}
                onChange={(e) =>
                  setSignupInput({ ...signupInput, password: e.target.value })
                }
              />{" "}
              <div
                className="signup-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>

            <button className="signup-btn" onClick={signupHandler}>
              Sign Up
            </button>
            <div className="signup-nav">
              Already have an account? <NavLink to="/"> login here</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
