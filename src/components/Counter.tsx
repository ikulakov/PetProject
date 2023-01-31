import React, { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={classes.counter}>
            {counter}
            <button onClick={() => setCounter((curCounter) => curCounter + 1)}>Increment</button>
        </div>
    );
};

export default Counter;