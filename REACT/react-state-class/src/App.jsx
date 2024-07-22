import "./App.css";
import LotteryGame from "./components/LotteryGame/LotteryGame.jsx";
import { getSumOfRandomNumber } from "./utils/helperLotteryGame";

function App() {
  let winCondition = (ticket) => {
    return getSumOfRandomNumber(ticket) === 15; // Win condition is sum of number is 15.
    // return ticket.every((number) => number === ticket[0]); // Win condition is all numbers must be same. Ex. 666, 555, 222, etc.
    // return ticket[0] === 0; // Win condition is fist number of ticket is 0. Ex. 012, 098, etc.
  };

  return (
    <>
      <LotteryGame sizeOfTicket={5} winCondition={winCondition} />
    </>
  );
}

export default App;
