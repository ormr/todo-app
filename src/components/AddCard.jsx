import React from 'react';
import './AddCard.scss';

export const AddCard = ({ onAddCard }) => {

  const [text, setText] = React.useState('');

  const onSubmit = () => {
    if (text) {
      onAddCard(text);
      setText('');
    }
  }

  const onKeyPressed = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <div className="add-card">
      <input
        type="text"
        value={text}
        placeholder="Enter task"
        className="add-card--input"
        onKeyDown={onKeyPressed}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={onSubmit}
        className="add-card--button"
      >
      </button>
    </div>
  );
}