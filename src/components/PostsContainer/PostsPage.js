import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [userPosts, setUserPosts] = useState(dummyData);

  return (
      <div className="posts-container-wrapper">
        {userPosts.map((post) => <Post post={post}/>)}
      </div>
  );

};

export default PostsPage;
