import { useState } from "react";
import "./LotteryGame.css";

/* Note: You will won lottery ticket when the sum of lottery number is equals to 15. */

export default function () {
    let randomNumberGenerator = () => {
        let randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        let randomNum = randomNumber;
        let sum = 0;

        // Get the first three digits of the number
        for (let i = 0; i < 3; i++) {
            sum += randomNum % 10;
            randomNum = Math.floor(randomNum / 10);
        }
        return { randomNumber, sum };
    };

    let [lotteryTicket, setLotteryTicket] = useState(randomNumberGenerator);

    let generateLotteryTicket = () => setLotteryTicket(randomNumberGenerator());

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="lottery-card">
                {lotteryTicket.sum === 15 ? (
                    <h2 className="win-lottery">
                        Congratulations!
                        <br />
                        You Won this Lottery Ticket.
                    </h2>
                ) : (
                    <h2 className="lottery-ticket">Lottery Ticket</h2>
                )}
                <hr />
                <h3>{lotteryTicket.randomNumber}</h3>
                <hr />
                <div onClick={generateLotteryTicket} className="num-gen-btn">Generate Ticket</div>
            </div>
        </div>
    );
}
