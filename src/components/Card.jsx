import { useState } from "react";
import joe from "../assets/joe.jpg";
import "../styles/Card.css";

export default function Card() {
  const [clicked, setClicked] = useState("false");
  const [score, setScore] = useState(0);
  function selectCard() {
    if (clicked === "false") {
      setClicked("true");
      setScore(score + 1);
    }
  }
  return (
    <>
      <div onClick={selectCard} className="card-container">
        <img src={joe} alt="joe" className="card"></img>
        <h2>Joe</h2>
        <h6>{score}</h6>
        <h6>{clicked}</h6>
      </div>
    </>
  );
}
