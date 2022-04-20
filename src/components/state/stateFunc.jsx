import React, { useState } from 'react';

const StateFunc = () => {
    // let v1 = 100;

    const [state, setState] = useState(100);
    // const [currentValue, setCurrentValue] = useState(100);

    const handleClick = () => {
        // v1++;
        // console.log("VAlue: ", v1)
        setState(state + 1);
        console.log("Value: ", state);
    }

    console.log("Value: ", state);

    return (
        <div>
            {/* <h2>Current State: {v1}</h2> */}
            <h2>Current State: {state}</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default StateFunc;