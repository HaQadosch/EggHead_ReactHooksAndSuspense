import React from 'react';
import './App.css';
import { Idle } from './components/Idle';
import { Counter } from './components/Counter';
import { Usage } from './components/Tilt';
import { Stopwatch } from './components/Stopwatch';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Idle />
        <Counter />
        <Usage />
        <Stopwatch />
      </header>
    </div>
  );
};

export default App;
