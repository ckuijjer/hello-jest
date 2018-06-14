import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boop from './Boop';

const NotExportedComponent = Boop.__get__('NotExportedComponent');

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotExportedComponent />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Boop />
        </div>
      </div>
    );
  }
}

export default App;
