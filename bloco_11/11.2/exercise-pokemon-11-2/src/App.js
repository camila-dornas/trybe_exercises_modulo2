import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './Pokedex.css'

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <h1 className='Title'>Pokedex</h1>
        <Pokedex pokemons={ pokemons } />
      </div>
    )
  }
}

export default App;
