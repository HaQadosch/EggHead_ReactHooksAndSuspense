import React from 'react'
import './App.css'
import { Counter } from './components/Counter'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App
