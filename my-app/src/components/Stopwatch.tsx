import React, { useRef, useEffect, useReducer } from "react";

const buttonStyle = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "2em",
  padding: 15,
  margin: 5,
  width: 200
};

type StateType = {
  running?: boolean;
  lapse?: number;
};

const stopWatchReducer = (currentState: StateType, newState: StateType) => {
  return { ...currentState, ...newState };
};

export const Stopwatch: React.FC = () => {
  const [{ lapse, running }, setState] = useReducer(stopWatchReducer, {
    lapse: 0,
    running: false
  });
  const intervalRef = useRef<number>(0);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const startStop = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - (lapse || 0);
      intervalRef.current = window.setInterval(() => {
        setState({ lapse: Date.now() - startTime });
      }, 0);
    }
    setState({ running: !running });
  };

  const clearWatch = () => {
    clearInterval(intervalRef.current);
    setState({ lapse: 0, running: false });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <label
        style={{ display: "block", fontSize: "5em" }}
      >{`${lapse} ms`}</label>
      <button onClick={startStop} style={buttonStyle}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={clearWatch} style={buttonStyle}>
        Clear
      </button>
    </div>
  );
};
