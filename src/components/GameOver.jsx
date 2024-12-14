
const GameOver = ({winner, handleRestart}) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a Draw!</p>}
      <p>
        <button onClick={handleRestart}>Rematch!</button>
      </p>
    </div>
  )
};

export default GameOver;
