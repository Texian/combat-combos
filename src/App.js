import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="combo-sheet">
        <div class="attributes">
          <header>ATTRIBUTES</header>
          <div className="attribute"></div>
          <div className="attribute"></div>
          <div className="attribute"></div>
          <div className="attribute"></div>
          <div className="attribute"></div>
          <div className="attribute"></div>
        </div>
        <div class="combos">
          <header>COMBO</header>
          <div className="combo-list"></div>
        </div>
        <div class="list">
          <header>MOVE LIST</header>
          <div className="combo-list"></div>
        </div>
        <div class="results">
          <header>RESULTS</header>
        </div>
      </div>
    </div>
  );
}

export default App;
