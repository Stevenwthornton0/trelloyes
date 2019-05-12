import React from 'react';
import './card.css';


function Card(props) {
  const title = (
    <h3 className='title'>
      {props.title}
    </h3>
  )
  const content = (
    <p className='content'>
      {props.content}
    </p>
  )
  return (
    <div className='Card'>
      {title}
      {content}
    </div>
  )
}

export default Card;