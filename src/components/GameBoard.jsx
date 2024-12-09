import { useState } from "react";

const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const GameBoard = ({activePlayer, onSelectSquare}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        const nextGameBoard = [...gameBoard.map(rows => [...rows])];
        nextGameBoard[rowIndex][colIndex] = activePlayer;
        setGameBoard(nextGameBoard);
        onSelectSquare();
    };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
