import React from 'react';
import './App.scss';

import { Search } from './Search.jsx';
import { List } from './List.jsx';
import { AddCard } from './AddCard.jsx';

const initialState = {
  cards: [
    {
      id: 1,
      text: 'Drink coffee',
      completed: true
    },
    {
      id: 2,
      text: 'Make something',
      completed: false
    }
  ],
  search: ''
};

export const App = () => {
  const [list, setList] = React.useState(initialState);

  const onAddCard = (text) => {
    setList({
      ...list, 
      cards: [
      ...list.cards,
        {
          id: list.cards.length + 1,
          text,
          completed: false
        }
      ]
    })
  }

  const onSearch = (text) => {
    if (text.length === 0) return list.cards;
    return list.cards.filter(card => {
      return card.text.toLowerCase().indexOf(text.toLowerCase()) > -1 && !card.completed
    });
  }

  const onDeleteCard = (id) => {
    setList({...list, cards: list.cards.filter((card) => card.id !== id)});
  }

  const onTaskComplete = (id) => {
    const card = list.cards.find(card => card.id === id);
    const index = list.cards.findIndex(card => card.id === id);
    card.completed = !card.completed;
    setList({
      ...list,
      cards: [...list.cards.slice(0, index), card, ...list.cards.slice(index + 1)]
    });
  }


  const visibleElements = onSearch(list.search);

  return (
    <div className="app">
      <Search onSearch={(search) => setList({ ...list, search })} />
      <List
        cards={visibleElements}
        onCompleted={onTaskComplete}
        onDeleteCard={onDeleteCard}
      />
      <AddCard onAddCard={(value) => onAddCard(value)}/>
    </div>
  );
}