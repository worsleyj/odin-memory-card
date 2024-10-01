import { useState, useEffect } from "react";
import joe from "../assets/joe.jpg";
import "../styles/Card.css";

export default function Card() {
  const [image, setImage] = useState("");
  const [clicked, setClicked] = useState("false");
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchPokemon() {
      let data = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      let pokemon = await data.json();
      setImage(pokemon.sprites.front_default);
    }
    fetchPokemon();
  }, []);

  function selectCard() {
    if (clicked === "false") {
      setClicked("true");
      setScore(score + 1);
    } else {
      alert("already clicked!");
    }
  }
  return (
    <>
      <div onClick={selectCard} className="card-container">
        <img src={image} alt="pokemon" className="card"></img>
        <h2>Joe</h2>
        <h6>{score}</h6>
        <h6>{clicked}</h6>
      </div>
    </>
  );
}
