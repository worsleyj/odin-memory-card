import { useState } from "react";
import Card from "../components/Card";
import "../styles/App.css";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Card
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Card
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Card
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Card
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Card
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Card
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
