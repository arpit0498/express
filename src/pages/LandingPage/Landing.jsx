import React, { useContext, useEffect } from "react";
import "./Landing.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/PostCard/PostCard";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { DataContext } from "../../contexts/DataContext";
import { useState } from "react";

const Landing = () => {
  const { state, dispatch, setFilter, userLoggedIn } = useContext(DataContext);

  const landingPost = state?.posts?.filter(
    ({ username }) =>
      username === userLoggedIn ||
      state?.following?.find((user) => user.username === username)
  );
  const data = state.filter
    ? [...landingPost].sort((a, b) =>
      state.filter === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : b.likes.likeCount - a.likes.likeCount
    )
    : [...landingPost];


  useEffect(() => {
    dispatch({ type: "USER_TO_FOLLOW" });
  }, []);

  return (
    <div className="landing-container">


      {/* filter section in landing page */}
      <div className="feed">
        <div className="filter-container">
          <div className="filter-post">
            <div className="filter">
              <div
                className="filter-content"
                onClick={() => setFilter("latest")}
              >
                <FiberNewIcon />
                <p>Latest</p>
              </div>
            </div>
            <div className="filter">
              {" "}
              <div
                className="filter-content"
                onClick={() => setFilter("trending")}
              >
                <WhatshotIcon />
                <p>Trending</p>
              </div>
            </div>
          </div>
          {/* user to create post */}
          <CreatePost />
        </div>
        {/* Display all the posts of user logged in and whom user is following*/}
        {state.filter
          ? data?.map((data) => (
            <div key={data._id}>
              {" "}
              <PostCard data={data} />
            </div>
          ))
          : data.reverse()?.map((data) => (
            <div key={data._id}>
              {" "}
              <PostCard data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Landing;
