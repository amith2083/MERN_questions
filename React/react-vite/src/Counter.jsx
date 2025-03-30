import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  useEffect(() => {
    if (isIncrementing && count < 100) {
      setCount(prev => prev + 1);
    } else {
      setIsIncrementing(false);
    }
  }, [count, isIncrementing]); // Dependency ensures it keeps running until 100

  useEffect(() => {
    if (isDecrementing && count > 0) {
      setCount(prev => prev - 1);
    } else {
      setIsDecrementing(false);
    }
  }, [count, isDecrementing]); // Dependency ensures it keeps running until 0

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setIsIncrementing(true)}>Start +</button>
      <button onClick={() => setIsDecrementing(true)}>Start -</button>
    </div>
  );
};

export default Counter;
