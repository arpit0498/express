import React, { useContext, useState, useEffect, useRef } from "react";
import "./PostCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { DataContext } from "../../contexts/DataContext";
import axios from "axios";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { NavLink } from "react-router-dom";

const PostCard = ({ data }) => {
  const { state, likePost, bookMarkPost, userLoggedIn } = useContext(DataContext);
  const { deletePost, setEditPost, getPostData } = useContext(AsideDataContext);
  const [userData, setUserData] = useState([]); //to show the user details in individual post in landing page
  const [modifyPost, setModifyPost] = useState(false);

  const likedCount = state.posts.find(({ _id }) => _id === data._id)?.likes?.likeCount;
  const postLiked = state?.likedPosts?.find((id) => id === data._id);
  const postBookmarked = state?.bookmarkedPosts?.find((id) => id === data._id);
  const picOfUser = state?.users?.find((user) => user.username === data.username);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const user = state?.users?.find((usr) => usr.username === data.username);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/users/${user._id}`);
        setUserData(response.data.user);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [state.users]);

  const d = new Date(data.createdAt);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setModifyPost(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="post-container">
        <NavLink className="not-a-link" to={`/profilepage/${data?.username}`}>
          <div className="post-title">
            <img src={picOfUser?.avatarUrl} alt="" className="nav-profile-pic" />
            <div className="post-date">
              <p>
                <b>
                  {userData?.firstname} {userData?.lastname}
                </b>{" "}
                {d.toDateString()}
              </p>
              <p>@{data?.username}</p>
            </div>
          </div>
        </NavLink>
        <div className="three-dots-container">
          <div id="three-dots" onClick={() => setModifyPost(!modifyPost)}>
            {data.username === userLoggedIn && <MoreVertIcon />}{" "}
          </div>
          {modifyPost && (
            <div ref={dropdownRef} className="post-popup">
              <div className="hover" onClick={() => {
                setEditPost(true);
                getPostData(data._id);
              }}>
                Edit
              </div>
              <div className="hover" onClick={() => deletePost(data._id)}>
                Delete
              </div>
            </div>
          )}
        </div>
        <NavLink className="not-a-link" to={`/postpage/${data._id}`}>
          <div className="post-content">
            {data?.content}
            {data?.image && <img className="post-img" src={data?.image} alt="" />}
          </div>
        </NavLink>
        <hr />
        <div className="post-actions">
          <div
            className="post-icons"
            onClick={() => {
              likePost(data._id, postLiked);
            }}
          >
            <div className="liked-counter-div">
              {postLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              {likedCount}
            </div>
          </div>
          {/* <div className="post-icons">
            <ChatBubbleOutlineIcon />
          </div> */}
          <div
            className="post-icons"
            onClick={() => {
              bookMarkPost(data._id, postBookmarked);
            }}
          >
            {postBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
