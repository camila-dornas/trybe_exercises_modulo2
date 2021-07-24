import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleCLick = this.handleCLick.bind(this);
    this.handleCLick2 = this.handleCLick2.bind(this);
    this.handleCLick3 = this.handleCLick3.bind(this);
  }

  handleCLick() {
    console.log('Click');
  }

  handleCLick2() {
    console.log('Click 2');
  }

  handleCLick3() {
    console.log('Click 3');
  }

  render() {
    return(
      <div>
        <button onClick={this.handleCLick}>Click!</button>
        <button onClick={this.handleCLick2}>Click2!</button>
        <button onClick={this.handleCLick3}>Click3!</button>
      </div>
    )
  }
}


export default App;
