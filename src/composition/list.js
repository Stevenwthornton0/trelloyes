import React from 'react';
import Card from './card'
import './list.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            title={card.title}
            content={card.content}
            id={card.id}
            onDeleteItem = {props.onDeleteItem}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick = {() => props.onAddCard(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}