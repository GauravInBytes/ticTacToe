import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            onChange={(e) => setPlayerName(e.target.value)}
            value={playerName}
            type="text"
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(prevState => !prevState)}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
};

export default Player;
