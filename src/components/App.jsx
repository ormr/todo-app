import React from 'react';
import './App.scss';
import { List } from './List.jsx';
import { AddCard } from './AddCard.jsx';

const initialState  = [
  {
    id: 1,
    text: 'Hello',
    completed: false
  }
]

export const App = () => {
  const [cards, setCards] = React.useState(initialState);
  return (
    <div className="app">
      <List cards={cards} />
      <AddCard />
    </div>
  );
}