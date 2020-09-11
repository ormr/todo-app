import React from 'react';

import './Card.scss';

export const Card = ({ id, text, completed }) => {
  return (
    <li>{ text }</li>
  );
}