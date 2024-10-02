export default function Header({ score, highScore }) {
  return (
    <>
      <h1>High Score: {highScore}</h1>
      <h2>Current Score: {score}</h2>
    </>
  );
}
