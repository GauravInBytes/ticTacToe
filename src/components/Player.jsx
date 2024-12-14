import { useState } from "react";

const Player = ({ name, symbol, isActive, changePlayerName}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(prev => !prev);
    if(isEditing)
    changePlayerName(symbol, playerName);
  };
  return (
    <li className={isActive ? "active" : undefined}>
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
      <button onClick={handleEditClick}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
};

export default Player;
