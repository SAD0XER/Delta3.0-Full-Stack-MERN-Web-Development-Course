import { useState } from "react";
import "./LotteryGame.css";
import { generateRandomNumber } from "../../utils/helperLotteryGame";
import Ticket from "./Ticket";

export default function LotteryGame({ sizeOfTicket = 3, winCondition }) {
  let [lotteryTicket, setLotteryTicket] = useState(generateRandomNumber(sizeOfTicket));
  let isWinning = winCondition(lotteryTicket);
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
