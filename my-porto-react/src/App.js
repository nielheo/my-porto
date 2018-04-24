import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './AppBar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Content />
      </div>
    );
  }
}

export default App;
