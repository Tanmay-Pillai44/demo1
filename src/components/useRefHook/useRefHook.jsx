import React, { useRef, useEffect, useState } from 'react';

const UseRefHook = () => {
    const timerId = useRef(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // timerId.current = setInterval(() => {
        //     console.log("F-1 Set Interval");
        // }, 3000);

        // return () => clearInterval(timerId.current);
        setInterval(() => {
            const count = timerId.current + 1;
            setCounter(count);
            timerId.current++;
        }, 200);
    });

    return (
        <div>
            <h1>Counter: {counter}</h1>
            {/* <button onClick={() => setCounter(counter + 1)}>Click</button> */}
        </div>
    );
};

export default UseRefHook;