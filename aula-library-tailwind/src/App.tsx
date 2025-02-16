import React from 'react';
import './App.css';
import { Container } from './components/container';
import { Text } from './components/text'
import { Title } from './components/title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Olá, Mundo
        </p>
        <Container children={<Text/>}/>
        <Container children={<Title/>}/>
      </header>
    </div>
  );
}

export default App;
