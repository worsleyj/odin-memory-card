import { useState, useEffect } from "react";
import "../styles/Card.css";

const uniqueNumbers = [];

export default function Card({
  score,
  setScore,
  highScore,
  setHighScore,
  generateCards,
}) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("Pokemon");
  const [clicked, setClicked] = useState("false");

  useEffect(() => {
    async function fetchPokemon() {
      let data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + generatePokemonNumber()
      );
      let pokemon = await data.json();
      setImage(pokemon.sprites.front_default);
      setName(pokemon.name);
    }
    fetchPokemon();
    return () => {
      uniqueNumbers.pop();
    };
  }, []);

  return (
    <>
      <div onClick={selectCard} className="card-container">
        <img src={image} alt={name} className="card"></img>
        <h2>{name}</h2>
        <h6>{score}</h6>
      </div>
    </>
  );

  function selectCard() {
    if (clicked === "false") {
      setClicked("true");
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
      setScore(0);
      location.reload();
    }
  }
}

function generatePokemonNumber() {
  const pokemonNumber = Math.floor(Math.random() * 150 + 1);
  if (uniqueNumbers.includes(pokemonNumber)) {
    return generatePokemonNumber();
  }
  uniqueNumbers.push(pokemonNumber);
  return pokemonNumber;
}
