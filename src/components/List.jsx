import React from 'react';
import './List.scss';

import { Card } from './Card.jsx';

export const List = ({ cards }) => {
  return (
    <ul className="app-list">
      {cards.map((card, index) => (
        <Card {...card} />
      ))}
    </ul>
  );
};