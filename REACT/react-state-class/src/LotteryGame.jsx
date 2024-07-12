import { useState } from "react";
import "./LotteryGame.css";
import { generateRandomNumber, getSumOfRandomNumber } from "./utils/helperLotteryGame";
import Ticket from "./Ticket";

/* Note: You will won lottery ticket when the sum of lottery number is equals to 15. */

export default function LotteryGame({ sizeOfTicket = 3, winningSum = 9 }) {
  let [lotteryTicket, setLotteryTicket] = useState(generateRandomNumber(sizeOfTicket));
  let isWinning = getSumOfRandomNumber(lotteryTicket) === winningSum;
  let buyTicket = () => setLotteryTicket(generateRandomNumber(sizeOfTicket));

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="lottery-card">
        {isWinning ? (
          <h3 className="win-lottery">
            Congratulations!
            <br />
            You Won this Lottery Ticket.
          </h3>
        ) : (
          <h2 className="lottery-ticket">Lottery Ticket</h2>
        )}
        <Ticket ticket={lotteryTicket} />
        <div onClick={buyTicket} className="num-gen-btn">
          Generate Ticket
        </div>
      </div>
    </div>
  );
}
