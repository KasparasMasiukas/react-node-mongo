import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Names from './components/Names.js';

function App() {
  const [txt, setTxt] = useState('Loading...');

  async function fetchData() {
    await await new Promise(r => setTimeout(r, 1500));
    const res = await axios('api/ping');
    setTxt(res.data);
  }

  useEffect(() => { 
    fetchData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world!</p>
        <p>{txt}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Users:</p>
        <Names/>
      </header>
    </div>
  );
}

export default App;
