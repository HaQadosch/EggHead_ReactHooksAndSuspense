import React, { useState } from 'react'

export const Counter: React.FC = () => {
  const [count, setcount] = useState(0)
  const handleClick = () => setcount(count + 1)

  return <button onClick={handleClick} >{count}</button>
}
