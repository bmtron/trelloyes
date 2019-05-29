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
  
  render() {
    const { store } = this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(frank => ( 
            <List 
            header={frank.header} 
            key={frank.id} 
            cards={frank.cardIds.map(id => store.allCards[id])} />
            ))}
        </div>
      </main>
    );
  }
}

export default App;

