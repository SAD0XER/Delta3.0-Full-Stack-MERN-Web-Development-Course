import "./App.css";
import Title from "./Title.jsx";

function App() {
  return (
    <>
      <Title />
      <p style={{ color: "gold", backgroundColor: "darkviolet" }}>
        This is the paragraph and the sum of 6 * 5 + 2 + 2 is {6 * 5 + 2 + 2}
      </p>
    </>
  );
}

export default App;
