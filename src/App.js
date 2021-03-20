import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header'

import Main from './components/Main/Main';

class App extends React.Component { 
  state = {
    exibindoCarrinho: true,
    filtroNome: ''
  }

  exibindoCarrinho = () => {
    this.setState({exibindoCarrinho: !this.state.exibindoCarrinho});
  }

  setFiltroNome = (value) => {
    this.setState({filtroNome: value})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header 
            setFiltroNome={this.setFiltroNome}
            exibindoCarrinho={this.exibindoCarrinho}
          />
          <Main 
            exibindoCarrinho={this.state.exibindoCarrinho} 
            filtroNome={this.state.filtroNome}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
