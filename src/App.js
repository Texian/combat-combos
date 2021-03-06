import React from 'react';
import MenuDrop from './scripts/menuDrop';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="combo-sheet">
        <div class="attributes">
          <header>ATTRIBUTES</header>
          <div className="grid">
            <div className="attribute">
              <label htmlFor="strength">Strength</label>
              <input type="number" id="strength" name="strength" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="charisma">Charisma</label>
              <input type="number" id="charisma" name="charisma" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="perception">Perception</label>
              <input type="number" id="perception" name="perception" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="dexterity">Dexterity</label>
              <input type="number" id="dexterity" name="dexterity" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="manipulation">Manipulation</label>
              <input type="number" id="manipulation" name="manipulation" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="appearance">Appearance</label>
              <input type="number" id="appearance" name="appearance" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="stamina">Stamina</label>
              <input type="number" id="stamina" name="stamina" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="intelligence">Intelligence</label>
              <input type="number" id="intelligence" name="intelligence" required min="1" max="10" size="10"/>
            </div>
            <div className="attribute">
              <label htmlFor="wits">Wits</label>
              <input type="number" id="wits" name="wits" required min="1" max="10" size="10"/>
            </div>
          </div>
        </div>
        <div class="combos">
          <header>COMBO</header>
          <div className="combo-list">
            <label htmlFor="comboName">Combo Name</label>
            <input type="text" name="comboName" id="comboName"/>
            <button>Upload</button> {/* Upload a JSON or CSV to use the built-in roller */}
            <button>Download</button> {/* Save as JSON or CSV to upload at a later date */}
          </div>
        </div>
        <div class="charms">
          <header>CHARM LIST</header>
          <label htmlFor="charmList">Abilities</label>
          <div className="ability-list"><MenuDrop /></div>
          <div className="charm-list">
            <table>
              <tr>
                <th>Name</th>
                <th>Essence Cost</th>
                <th>Dice Pool</th>
              </tr>
              <tr>
                <th>Punch</th>
                <th>2</th>
                <th>4</th>
              </tr>
            </table>
          </div>
        </div>
        <div class="results">
          <header>RESULTS</header>
          <div id="results">
            <div className="final-tally">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Total Essence Cost</th>
                  <th>Total Additional Cost</th>
                  <th>Total Dice Pool</th>
                </tr>
              </table>
            </div>
            <button>Roll?</button>
            <div className="roll-results">
              <div>Results:</div>
              <div>Successes:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
