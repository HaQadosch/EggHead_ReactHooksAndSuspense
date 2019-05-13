import React from 'react';
import './App.css';
import { AppForm } from './components/AppForm';
import { Idle } from './components/Idle';
import { Counter } from './components/Counter';
import { Usage } from './components/Tilt';
import { Stopwatch } from './components/Stopwatch';
import { LazyTilt } from './components/LazyTilt';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <LazyTilt />
        <AppForm />
        <Idle />
        <Counter />
        <Usage />
        <Stopwatch />
      </header>
    </div>
  );
};

export default App;
