import React, { Component } from 'react';
import Card from './Card';
import './List.css';

export default function List(props){
    return (
      <section className='List'>
        <header className='List-cards'>
          {props.header}
        </header>
        <div className='List-cards'>
          {props.cards.map((card, index) => {
            return <Card onDeleteCard={props.onDeleteCard} id={card.id} listId={props.id} key={index} title={card.title} content={card.content} />;
          })}
          <button onClick={() => props.onRandomCard(props.id)} type='submit'>Add Random Card</button>
        </div>
        
      </section>
    )
}