import React from 'react';
import useCounter from './useCounter';

const CustomCounter= () => {
    const { count, increment, decrement, reset } = useCounter(); // Start from 5

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CustomCounter;
