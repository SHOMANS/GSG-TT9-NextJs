'use client';
import React, { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>CounterPage</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default CounterPage;
