import React, { useEffect, useState, useRef } from 'react';

const UseEffectHook = () => {

    const [counter, setCounter] = useState(0);
    // const [counter2, setCounter2] = useState(0);

    const timerId = useRef(null);

// componentDidMount
// componentDidUpdate
// componentWilUnmount

    const handleClick = () => console.log("Document has been clicked");

    useEffect(() => {
        console.log("Use-Effect Triggered F-1");
        // document.addEventListener('click', () => {
        //     console.log("Document has been clicked");
        // })

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);

        // const timer = setInterval(() => {
        //     console.log("Interval F-1", counter);
        // }, 1000);
        // timerId.current = timer;

        // return () => {
        //     console.log("Timer -ID-2 F-1", timer)
        //     clearInterval(timerId.current);
        // }
    }, [counter]);

    // useEffect(() => {
    //     console.log("Use-Effect Without Triggered F-2")
    // },);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            {/* <h1>Counter2: {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>Increment</button> */}
        </div>
    )
}

export default UseEffectHook;