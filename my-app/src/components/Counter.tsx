import React, { useState } from 'react'

const useCount = ({initialState = 0, step = 1} = {}) => {
  const [count, setcount] = useState(initialState)
  const increment = () => setcount(count + step)

  return { count, increment }
}

export const Counter: React.FC = () => {
  const { increment, count } = useCount()
  return <button onClick={increment} >{count}</button>
}
