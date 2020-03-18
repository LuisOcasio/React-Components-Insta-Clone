//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import data from "../../dummy-data";

const PostsPage = props => {
  // set up state for your data
  const [posts] = useState(data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map(e => (
        <Post key={e.id} post={e} />
      ))}
    </div>
  );
};

export default PostsPage;
