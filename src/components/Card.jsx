import joe from "../assets/joe.jpg";
import "../styles/Card.css";

export default function Card() {
  return (
    <>
      <div class="card-container">
        <img src={joe} alt="joe" class="card"></img>
        <h2>Joe</h2>
      </div>
    </>
  );
}
