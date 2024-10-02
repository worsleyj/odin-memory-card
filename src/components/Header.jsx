export default function Header({ score, highScore }) {
  return (
    <>
      <div className="header-container">
        <h1 className="title">Poké-mnemonics!</h1>
        <h1>High Score: {highScore}</h1>
        <h2>Current Score: {score}</h2>
      </div>
    </>
  );
}
