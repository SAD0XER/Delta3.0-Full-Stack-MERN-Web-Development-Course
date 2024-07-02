import { useState } from "react";

export default function DateActivity() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <h2>Date and Time Activity</h2>
            <p style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <input
                    type="range"
                    min="1"
                    max="10"
                    name="slide"
                    value={step}
                    onChange={(event) => setStep(Number(event.target.value))}
                    style={{ padding: 0 }}
                />
                {step}
            </p>
            <p>
                <button
                    onClick={() => {
                        setCount((prevCount) => prevCount - step);
                    }}>
                    -
                </button>
                {date.toDateString()}
                <button
                    onClick={() => {
                        setCount((prevCount) => prevCount + step);
                    }}>
                    +
                </button>
            </p>
            <button
                onClick={() => {
                    setStep(1);
                    setCount(0);
                }}>
                Reset
            </button>
        </div>
    );
}
