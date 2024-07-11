import { useState } from "react";
import "./LotteryGame.css";
import { generateRandomNumber, getSumOfRandomNumber } from "./utils/helperLotteryGame";

/* Note: You will won lottery ticket when the sum of lottery number is equals to 15. */

export default function () {
    let [lotteryTicket, setLotteryTicket] = useState(generateRandomNumber(3));
    let isWinning = getSumOfRandomNumber(lotteryTicket) === 15;
    let buyTicket = () => setLotteryTicket(generateRandomNumber(3));

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
                <hr />
                <h3>
                    <span>
                        {lotteryTicket[0]}
                        {lotteryTicket[1]}
                        {lotteryTicket[2]}
                    </span>
                </h3>
                <hr />
                <div onClick={buyTicket} className="num-gen-btn">
                    Generate Ticket
                </div>
            </div>
        </div>
    );
}
