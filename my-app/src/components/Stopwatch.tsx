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
  running: boolean;
  lapse: number;
};

type ActionType = {
  type: "LAPSE" | "TOGGLE_RUNNING" | "CLEAR";
  now?: number;
  startTime?: number;
};

const stopWatchReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "LAPSE":
      return {
        ...state,
        lapse: (action.now || 0) - (action.startTime || 0)
      };

    case "TOGGLE_RUNNING":
      return {
        ...state,
        running: !state.running
      };

    case "CLEAR":
      return {
        ...state,
        lapse: 0,
        running: false
      };

    default:
      return state;
  }
};

export const Stopwatch: React.FC = () => {
  const [{ lapse, running }, dispatch] = useReducer(stopWatchReducer, {
    lapse: 0,
    running: false
  });
  // const [lapse, setLapse] = useState<number>(0);
  // const [running, setRunning] = useState<boolean>(false);
  const intervalRef = useRef<number>(0);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const startStop = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = window.setInterval(() => {
        // setLapse(Date.now() - startTime);
        dispatch({ type: "LAPSE", now: Date.now(), startTime });
      }, 0);
    }
    // setRunning(!running);
    dispatch({ type: "TOGGLE_RUNNING" });
  };

  const clearWatch = () => {
    clearInterval(intervalRef.current);
    // setLapse(0);
    // setRunning(false);
    dispatch({ type: "CLEAR" });
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
