import React from 'react';
import IncrementCounterHoc from './incrementCounterHoc';

const ClickCounter = (props) => {

    const { name, counter, handleChange } = props;

    // const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>{name} Click Counter : {counter}</h2>
            <button onClick={handleChange}>Click Counter</button>
        </div>
    )
}

export default IncrementCounterHoc(ClickCounter);