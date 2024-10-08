import { useState } from "react";
import Header from "./Header";
import Card from "../components/Card";
import "../styles/App.css";

function App() {
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore"));
  const [score, setScore] = useState(0);
  const cardNumber = 24;
  let cardArray = [];
  generateCards(cardNumber);
  return (
    <>
      <Header score={score} highScore={highScore} />
      <div className="main-container">{cardArray}</div>
    </>
  );
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  function generateCards(cardNumber) {
    cardArray = [];
    let i = 0;
    while (i < cardNumber) {
      i++;
      cardArray.push(
        <Card
          onClick={shuffleArray(cardArray)}
          key={i}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          generateCards={generateCards}
        />
      );
    }
  }
}

export default App;
