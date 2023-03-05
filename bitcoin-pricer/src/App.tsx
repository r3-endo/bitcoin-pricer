import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const CHANGE_THIS_URL = 'rr-pricer.com';
  const [info, setInfo] = useState(null);
  const BACKEND_URL = `https://${CHANGE_THIS_URL}/api`;

  useEffect(() => {
    axios.get(BACKEND_URL).then((response) => setInfo(response.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Response from REST API is... {info}</div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

