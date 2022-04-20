import React, { useState } from 'react';

const ExampleStateFunc = () => {
    const [state, setState] = useState("Welcome to my app");

    const handleClick = () => {
        setState("How are you doing?");
    }

    return (
        <div>
            <h2>{state}</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default ExampleStateFunc;