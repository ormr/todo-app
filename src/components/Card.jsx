import React from 'react';

import './Card.scss';

export const Card = ({id, text, completed, onCompleted, onDeleteCard}) => {

  const [strike, setStrike] = React.useState(completed);

  const onTaskComplete = () => {
    setStrike(!strike);
    onCompleted(id);
  }

  return (
    <li className={strike ? 'app-list-item striked' : 'app-list-item'}>
      <div className="app-list-item-left">
        <input
          id={'checkbox-' + id}
          className="app-list-item--input"
          type="checkbox"
          checked={strike}
          onChange={onTaskComplete}
        />
        <label
          htmlFor={'checkbox-' + id}
          className="app-list-item--label"
        >
          {text}
        </label>
      </div>
      <button className="app-list-item--button" onClick={onDeleteCard}></button>
    </li>
  );
};