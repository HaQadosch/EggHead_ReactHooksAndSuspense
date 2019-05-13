import React, { useState, useRef, useEffect } from "react";

const buttonStyle = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "2em",
  padding: 15,
  margin: 5,
  width: 200
};

export const Stopwatch = () => {
  const [lapse, setLapse] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const intervalRef = useRef<number>(0);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const startStop = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = window.setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    setRunning(!running);
  };

  const clearWatch = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
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
