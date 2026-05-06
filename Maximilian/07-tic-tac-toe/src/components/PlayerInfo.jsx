import { useState } from 'react';

export default function PlayerInfo({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {isEditing 
          ? <input type="text" value={editedName} onChange={handleNameChange} />
          : <span className="player-name">{editedName}</span>
      }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
  );
}

