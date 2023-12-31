import React, { useContext } from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { useEffect } from "react";

const Navbar = () => {
  const { userLoginData, dispatch, setOpenModal, userLoggedIn } =
    useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div className="nav-main">
      <div className="nav-container">
        <div className="navbar-title" >
          <h1>
            <span className="text-primary">Gym</span>
            <span className="text-secondary-dark">Express</span>

          </h1>
        </div>
        <NavLink className="not-a-link" to="/landing">
          {" "}
          <div className="nav-content">
            {" "}
            <div className="nav-icons">
              <HomeIcon />
            </div>
            <div className="nav-title">
              Home
            </div>
          </div>
        </NavLink>
        <NavLink className="not-a-link" to="/explore">
          <div className="nav-content">
            <div className="nav-icons">
              <ExploreIcon />
            </div>{" "}
            <div className="nav-title">
              Explore
            </div>

          </div>
        </NavLink>
        <NavLink className="not-a-link" to="/likepage">
          <div className="nav-content">
            {" "}
            <div className="nav-icons">
              <FavoriteIcon />
            </div>
            <div className="nav-title">
              Liked posts
            </div>
          </div>
        </NavLink>
        <NavLink className="not-a-link" to="/bookmark">
          {" "}
          <div className="nav-content">
            <div className="nav-icons">
              <BookmarkIcon />
            </div>{" "}
            <div className="nav-title">
              Bookmarks
            </div>
          </div>
        </NavLink>
        <NavLink className="not-a-link" to={`/profilepage/${userLoggedIn}`}>
          <div className="nav-content">
            <div className="nav-icons">
              <PersonIcon />
            </div>{" "}
            <div className="nav-title">
              Profile
            </div>
          </div>
        </NavLink>
        <NavLink to=""> <div
          className="nav-content"
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "RESET_ALL" });
            navigate("/");
          }}
        >
          <div className="nav-icons">
            <LogoutIcon />
          </div>{" "}
          <div className="nav-title">
            Logout
          </div>
        </div>
        </NavLink>

        <button onClick={() => setOpenModal(true)} > New Post</button>
        <NavLink
          to={`/profilepage/${userLoggedIn}`}
          className="nav-profile-container not-a-link"
        >
          <div className="nav-profile">
            <img
              src={userLoginData?.avatarUrl}
              alt=""
              className="nav-profile-pic"
            />
            <div>
              <h4>
                {userLoginData?.firstname} {userLoginData?.lastname}
              </h4>
              <span>@{userLoginData?.username}</span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
