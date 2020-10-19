import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="combo-sheet">
        <div class="attributes">
          <header className="header">ATTRIBUTES</header>
        </div>
        <div className="moves">
          <div class="combos">
            <header className="header">COMBO</header>
            <div className="combo-list"></div>
          </div>
          <div class="list">
            <header className="header">MOVE LIST</header>
            <div className="combo-list"></div>
          </div>
        </div>
        <div class="results">
          <header className="header">RESULTS</header>
        </div>
      </div>
    </div>
  );
}

export default App;
