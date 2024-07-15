import { useState } from "react";
import "./CommentForm.css";

export default function CommentForm({ addNewComment }) {
  // Setting default values for state variables.
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 0,
  });

  /* This method is called when any change trigger in input field. */
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value }; // Setting field value to current value using "Computed Property Names".
    });
  };

  let handleSubmit = (event) => {
    addNewComment(formData); // Calling parent component's method to add new comment.
    event.preventDefault(); // Preventing default action of form on submit.
    setFormData({ username: "", comment: "", rating: 0 }); // Resetting values after form is submitted.
  };

  return (
    <div className="comment-form">
      <h2>Leave a comment!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea
          cols={25}
          placeholder="Leave your comment here..."
          value={formData.comment}
          onChange={handleInputChange}
          id="comment"
          name="comment"
        />
        <br />
        <label htmlFor="rating">Rating (1-5)</label>
        <br />
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <button className="add-comment">Add Comment</button>
      </form>
    </div>
  );
}
