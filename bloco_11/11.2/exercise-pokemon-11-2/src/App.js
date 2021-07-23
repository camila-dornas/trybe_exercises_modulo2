import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <h1>Pokedex</h1>
        <Pokedex pokemons={ pokemons } />
      </div>
    )
  }
}

export default App;
