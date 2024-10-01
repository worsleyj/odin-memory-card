import joe from "../assets/joe.jpg";
import "../styles/Card.css";

export default function Card() {
  let hasBeenClicked = "false";
  function selectCard() {
    console.log("selected card");
  }
  return (
    <>
      <div onClick={selectCard} className="card-container">
        <img src={joe} alt="joe" className="card"></img>
        <h2>Joe</h2>
        <h6>{hasBeenClicked}</h6>
      </div>
    </>
  );
}
