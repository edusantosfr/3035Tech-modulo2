import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("Paula")
  const [count, setCount] = useState(1)

  function increment() {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu nome é {name}
        </p>
        <input value={name} onChange={e => setName(e.target.value)} />

        <p>Contador: {count}</p>
        <button onClick={increment}>Adiciona +</button>
      </header>
    </div>
  );
}

export default App;
