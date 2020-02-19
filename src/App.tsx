import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {getDataUrlFrom} from './utils'

function App() {
  
  const [dataUrl,setDataUrl] = useState('');
  useEffect(()=>{
    getDataUrlFrom({'url':'./js-nutshell.pdf'}).then(setDataUrl);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={dataUrl} alt="img"/>
      </header>
    </div>
  );
}

export default App;
