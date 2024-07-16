import { useFormik } from "formik";
import "./CommentForm.css";

// Validate method definition.
const validate = (values) => {
  const errors = {};

  // Validation for input username.
  if (!values.username) {
    errors.username = "Required!";
  } else if (values.username.length > 20) {
    errors.username = "Must be 15 characters or less";
  }

  // Validation for input comment.
  if (!values.comment) {
    errors.comment = "Required";
  }

  // Validation for input rating.
  if (!values.rating) {
    errors.rating = "Required";
  }

  return errors;
};

export default function CommentForm({ addNewComment }) {
  // Defining state variables using pkg. formik.
  const formik = useFormik({
    initialValues: {
      username: "",
      comment: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      addNewComment(values);
      formik.resetForm();
    },
  });

  return (
    <div className="comment-form">
      <h2>Leave a comment!</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <p>{formik.errors.username}</p> : null}
        <br />

        <label htmlFor="comment">Comment</label>
        <br />
        <textarea
          cols={25}
          placeholder="Leave your comment here..."
          value={formik.values.comment}
          onChange={formik.handleChange}
          id="comment"
          name="comment"
        />
        {formik.errors.comment ? <p>{formik.errors.comment}</p> : null}
        <br />

        <label htmlFor="rating">Rating (1-5)</label>
        <br />
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        {formik.errors.rating ? <p>{formik.errors.rating}</p> : null}
        <br />

        <button type="submit" className="add-comment">Add Comment</button>
      </form>
    </div>
  );
}
