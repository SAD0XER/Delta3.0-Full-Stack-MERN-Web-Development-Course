import { useState } from "react";

export default function Forms() {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let fieldValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = fieldValue; // This is the alternative method to change the values.
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ username: "", password: "" }); // Setting empty field to reset after submission.
  };

  return (
    <>
      <h1>Forms in HTML</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username </label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br />
        <label htmlFor="password">Enter Password </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
