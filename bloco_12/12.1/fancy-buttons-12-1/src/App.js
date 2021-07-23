import React from 'react';

function handleCLick() {
  console.log('Click');
}

function handleCLick2() {
  console.log('Click 2');
}

function handleCLick3() {
  console.log('Click 3');
}

class App extends React.Component {
  render() {
    return(
      <div>
        <button onClick={handleCLick}>Click!</button>
        <button onClick={handleCLick2}>Click2!</button>
        <button onClick={handleCLick3}>Click3!</button>
      </div>
    )
  }
}


export default App;
