import React, { useState } from 'react'

const Two = () => {
  const [count, setCount]=useState(0);

  return <>
    <button onClick={()=> setCount(count+1)}>+</button>
    <span>{count}</span>
    <button onClick={()=> setCount(count-1)}>-</button>
  </>  

  
}

export default Two
/*
import React, { useState } from 'react';

const Two = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default Two;

*/