import { useState } from "react";

export default function Forms() {
  let [name, setName] = useState("");

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange}/>
        <button>Submit</button>
      </form>
    </>
  );
}
