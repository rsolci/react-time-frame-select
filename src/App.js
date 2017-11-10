import React, { Component } from 'react';
import './App.css';

import Day from './Components/Day';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{position:'relative', display:'inline-block', width: '100px', maxHeight:'400px', overflowY:'scroll'}}>
          <Day />
        </div>
      </div>
    );
  }
}

export default App;
