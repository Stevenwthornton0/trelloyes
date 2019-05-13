import React from 'react';
import Card from './card.js';
import './list.css';

function List(props) {

  const header = (
    <header className='list-header'>
      <h2>
        {props.header}
      </h2>
    </header>
  )
  
  return (
    <section className='List'>
      {header}
      <div className='list-cards'>
        {props.cards.map((card) =>
          <Card
            title={card.title}
            content={card.content}
          />
        )}
      </div>
    </section>
  )
}


export default List;