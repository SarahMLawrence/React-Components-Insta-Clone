//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSectionContainer";


const PostsPage = () => {
  // set up state for your data
  
  return (
    <div className="posts-container-wrapper">
      {dummyData.map(item => {
        return (
          <PostHeader username={item.username}/>
      )
      
      })}
    </div>
  );
};

export default PostsPage;


 