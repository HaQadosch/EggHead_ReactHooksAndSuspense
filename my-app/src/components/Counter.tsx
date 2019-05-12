import React, { useState, useEffect } from "react";

const useCount = ({ initialState = 0, step = 1 } = {}) => {
  const init = () => +(window.localStorage.getItem("count") || initialState);
  const [count, setcount] = useState(init);
  const increment = () => setcount(count + step);

  return { count, increment };
};

export const Counter: React.FC = () => {
  const { increment, count } = useCount();
  useEffect(() => {
    window.localStorage.setItem("count", String(count));
  }, [count]);
  return <button onClick={increment}>{count}</button>;
};
