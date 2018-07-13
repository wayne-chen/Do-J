import React, { Component } from 'react';
import keyboard from './keyboardNotes.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={keyboard} className="keyboard" alt="keyboard" />
          <h1 className="title"></h1>
        </header>
      </div>
    );
  }
}

export default App;
