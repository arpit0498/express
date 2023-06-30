import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useEffect } from "react";

const Explore = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "USER_TO_FOLLOW" });
  }, []);

  const posts = [...(state?.posts)].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  console.log("sorted posts", posts)

  return (
    <div className="landing-container">

      <div>

        {[...state?.posts]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          ?.map((data) => (
            <PostCard data={data} />
          ))}
      </div>
      <div>
        {/* <div className="side-search-bar">
          <SearchBar />
          <div className="user-container">
            <h2>You might Like</h2>


            {state?.userToFollow?.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Explore;
