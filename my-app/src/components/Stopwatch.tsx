import React, { useRef, useEffect, useReducer } from 'react';

const buttonStyle = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
};

type StateType = {
  running?: boolean;
  lapse?: number;
};

const stopWatchReducer = (currentState: StateType, newState: StateType) => {
  return { ...currentState, ...newState };
};

const useStopWatch = () => {
  const [{ lapse, running }, setState] = useReducer(stopWatchReducer, {
    lapse: 0,
    running: false,
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

  return { lapse, running, startStop, clearWatch };
};

export const Stopwatch: React.FC = () => {
  const stopWatch_1 = useStopWatch();
  const stopWatch_2 = useStopWatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ display: 'block', fontSize: '5em' }}>{`${stopWatch_1.lapse} ms`}</label>
      <button onClick={stopWatch_1.startStop} style={buttonStyle}>
        {stopWatch_1.running ? 'Stop' : 'Start'}
      </button>
      <button onClick={stopWatch_1.clearWatch} style={buttonStyle}>
        Clear
      </button>
      <hr />
      <strong>Lapse Difference: </strong>
      <span>{`${(stopWatch_1.lapse || 0) - (stopWatch_2.lapse || 0)} ms`}</span>
      <hr />
      <label style={{ display: 'block', fontSize: '5em' }}>{`${stopWatch_2.lapse} ms`}</label>
      <button onClick={stopWatch_2.startStop} style={buttonStyle}>
        {stopWatch_2.running ? 'Stop' : 'Start'}
      </button>
      <button onClick={stopWatch_2.clearWatch} style={buttonStyle}>
        Clear
      </button>
    </div>
  );
};
