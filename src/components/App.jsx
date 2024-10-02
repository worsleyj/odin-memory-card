import { useState } from "react";
import Header from "./Header";
import Card from "../components/Card";
import "../styles/App.css";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const cardNumber = 12;
  return (
    <>
      <Header score={score} highScore={highScore} />
      {[...Array(cardNumber).keys()].map((key) => (
        <Card
          key={key}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      ))}
    </>
  );
  return;
  // <>
  //   <Header highScore={highScore} />
  //   <Card
  //     score={score}
  //     setScore={setScore}
  //     highScore={highScore}
  //     setHighScore={setHighScore}
  //   />
  // </>
}

export default App;
