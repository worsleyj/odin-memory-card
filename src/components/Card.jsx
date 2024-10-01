import { useState, useEffect } from "react";
import "../styles/Card.css";

export default function Card() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("Pokemon");
  const [clicked, setClicked] = useState("false");
  const [score, setScore] = useState(0);
  const pokemonNumber = Math.floor(Math.random() * 151);
  useEffect(() => {
    async function fetchPokemon() {
      let data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber
      );
      let pokemon = await data.json();
      setImage(pokemon.sprites.front_default);
      setName(pokemon.name);
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
        <img src={image} alt={name} className="card"></img>
        <h2>{name}</h2>
        <h6>{score}</h6>
        <h6>{clicked}</h6>
      </div>
    </>
  );
}
