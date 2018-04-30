import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <div className="Content">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
