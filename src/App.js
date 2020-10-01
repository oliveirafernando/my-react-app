import React, { Component } from 'react';
import './App.css';
import { Imc } from './components/Imc';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pessoas: [
        {
          nome: 'Fernando',
          peso: 82,
          altura: 180,
          imc: 82 / (180 * 180),
        },
      ],
    };
  }

  addPessoa(event) {
    // Pesquisar um formato de receber os objetos do Form quando ele for submetido

    const newPessoa = {
      nome: 'Fabiana',
      peso: 54,
      altura: 160,
      imc: 54 / (160 * 160),
    };
    this.setState({ pessoas: [...this.state.pessoas, newPessoa] });
  }

  render() {
    return (
      <Imc
        onAddPessoa={(event) => this.addPessoa(event)}
        pessoas={this.state.pessoas}
      />
    );
  }
}

export default App;
