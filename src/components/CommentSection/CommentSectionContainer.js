// You will add code to this file
import React, { useState } from "react";
import CommentInput from './CommentInput';
import Comment from './Comment';
import "./Comment.css";

import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [ comments, setComments ] = useState(props.comments)
  const [ commentInput, setCommentInput ] = useState("")

  const onEnterKeyDown = (e) => {
    e.preventDefault()
    const newComment = {
      username: "sarah_l", 
      text: commentInput
    }
    setComments([...comments, newComment])
  }

  console.log(comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
    
      {comments.map((comment, i) => <Comment key={i} comment={comment} />)}
      <CommentInput EnterKeyDown={onEnterKeyDown} 
      setCommentInput={setCommentInput} />
    </div>
  );
};

export default CommentSection;
 