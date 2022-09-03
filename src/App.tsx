import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my dweb.
        </p>
        <a
          className="App-link"
          href="http://water.smartzky.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to the Smart Site Management platform
        </a>
      </header>
    </div>
  );
}

export default App;
