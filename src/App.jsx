import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleActivePlayer = (playerSymbol) => {
    setActivePlayer(prevSymbol => prevSymbol === "X" ? "O" : "X");
  };

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
        <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>       
      </ol>
      <GameBoard activePlayer={activePlayer} onSelectSquare={handleActivePlayer}></GameBoard>
    </div>
  );
}

export default App;
