import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {
  return (
    <section className='List'>
      <header className='List-cards'>
        {props.header}
      </header>
      <div className='List-cards'>
        {props.cards.map((flugle) => 
          <Card key={flugle.id} title={flugle.title} content={flugle.content} />
          )}
      </div>
    </section>
  )
}

export default List;