import "./App.css";
import LotteryGame from "./LotteryGame";

function App() {
  return (
    <>
      <LotteryGame sizeOfTicket={3} winningSum={15} />
    </>
  );
}

export default App;
