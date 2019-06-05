import React, { Component } from 'react';
import './App.css'
import List from './List.js';


class App extends Component {
  static defaultProps =  {
    store: {
      lists: [],
      allCards: {}
    }
}
  state = {
    storeCards: {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
  }
  handleAddRandomCard = (listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    let test = newRandomCard();
    let newId = test.id;
    const newList = this.state.storeCards.lists;
    const newObj = this.state.storeCards.allCards;

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === listId) {
        newList[i].cardIds.push(test.id);
        newObj[test.id] = {id: newId, title: test.title, content: test.content}
      }
    }
    this.setState({
      storeCards: {
        lists: newList,
        allCards: newObj
      }
    })
    
  }
    
  
  handleDeleteCard = (id, listId) => {
    function omit(obj, keyToOmit) {
      return Object.entries(obj).reduce(
        (newObj, [key, value]) =>
            key === keyToOmit ? newObj : {...newObj, [key]: value},
        {}
      );
    }
   const newObj =  omit(this.state.storeCards.allCards, id);
    const newList = this.state.storeCards.lists;

    const finalList = newList.map(list => list.cardIds.filter(item => {
      return item !== id;
    }));
    for (let i = 0; i < newList.length; i++) {
      newList[i].cardIds = finalList[i];
    }
    this.setState({
      storeCards: {
        lists: newList,
        allCards: newObj
      }
    })
  } 
    
  render() {  
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.storeCards.lists.map((list, index) => (
            <List 
              onRandomCard={this.handleAddRandomCard}
              onDeleteCard={this.handleDeleteCard}
              key={index}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => (
                this.state.storeCards.allCards[id]
              ))} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

