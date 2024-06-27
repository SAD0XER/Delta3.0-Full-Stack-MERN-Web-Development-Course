import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [click, setClick] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClick(click + 1);
    };

    return (
        <div>
            <p>Click count = {click}</p>
            <button onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </button>
        </div>
    );
}
