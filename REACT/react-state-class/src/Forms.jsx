import { useState } from "react";

export default function Forms() {
  let [name, setName] = useState("");

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        {/* 'htmlFor' is the alternative to 'for' in normal HTML. */}
        <label htmlFor="name">Enter Name </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
