import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function Comment() {
  let [comments, setComments] = useState([]);

  let addNewComment = (comment) => {
    setComments((currComment) => [...currComment, comment]);
  };

  return (
    <div>
      <h2>All Comments</h2>
      {comments.map((comment, index) => (
        <div className="comment-card" key={index}>
          <span className="comment-name">{comment.username}</span>
          <span className="comment-rating">&nbsp;&nbsp;&nbsp;&nbsp;({comment.rating})</span>
          <p className="comment-text">{comment.comment}</p>
        </div>
      ))}
      <hr />
      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}
