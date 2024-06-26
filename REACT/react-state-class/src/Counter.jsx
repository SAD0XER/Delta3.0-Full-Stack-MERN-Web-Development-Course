import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function inCount() {
    setCount(count + 1); // This is the recommended way to update state.
    // setCount((count += 1)); //This works, but it's not recommended.
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}
