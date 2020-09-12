import React from 'react';
import './List.scss';

import { Card } from './Card.jsx';
export const List = ({ cards, onCompleted, onDeleteCard }) => {
  return (
    <ul className="app-list">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            {...card}
            onCompleted={() => onCompleted(card.id)}
            onDeleteCard={() => onDeleteCard(card.id)}
          />
        );
      })}
    </ul>
  );
};