import React, { useContext } from 'react';
import { MyName, Institute, MyCounter } from './../../App';

const ChildFour = () => {

    const name = useContext(MyName);
    const ins = useContext(Institute);
    const counteData = useContext(MyCounter);
    const { counter, handleChange } = counteData;

    return (
        <h2>
            Child Four: {name} - {ins} - Counter: {counter}
            <button onClick={handleChange}>Click Me</button>
        </h2>
    )
}

export default ChildFour;