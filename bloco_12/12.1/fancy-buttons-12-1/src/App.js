import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0,
    }

    this.handleCLick = this.handleCLick.bind(this);
    this.handleCLick2 = this.handleCLick2.bind(this);
    this.handleCLick3 = this.handleCLick3.bind(this);
  }

  handleCLick() {
    console.log('Click');
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1
    }))
  }

  handleCLick2() {
    console.log('Click 2');
    this.setState((estadoAnterior, _props) => ({
      botao2: estadoAnterior.botao2 + 1
    }))
  }

  handleCLick3() {
    console.log('Click 3');
    this.setState((estadoAnterior, _props) => ({
      botao3: estadoAnterior.botao3 + 1
    }))
  }

  render() {
    return(
      <div>
        <button key='botao1' onClick={this.handleCLick}>{this.state.botao1}</button>
        <button key='botao2' onClick={this.handleCLick2}>{this.state.botao2}</button>
        <button key='botao3' onClick={this.handleCLick3}>{this.state.botao3}</button>
      </div>
    )
  }
}


export default App;
