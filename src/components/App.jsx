import { useState } from "react";
import Card from "../components/Card";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
