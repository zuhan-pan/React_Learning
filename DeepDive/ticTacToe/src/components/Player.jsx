import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing(editing => !editing);
    isEditing && onChangeName(symbol, playerName);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  const editablePlayerName = isEditing ? (
    <input
      type="text"
      required
      value={playerName}
      onChange={handleChange}
    ></input>
  ) : (
    <span className="player-name">{playerName}</span>
  );

  const buttonCaption = isEditing ? 'Save' : 'Edit';

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{buttonCaption}</button>
      </span>
    </li>
  );
}
