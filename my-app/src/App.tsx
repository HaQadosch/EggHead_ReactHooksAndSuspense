import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Usage } from "./components/Tilt";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Usage />
      </header>
    </div>
  );
};

export default App;
