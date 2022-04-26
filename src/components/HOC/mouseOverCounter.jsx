import React from 'react';
import IncrementCounterHoc from './incrementCounterHoc';

const MouseOverCounter = (props) => {

    const { name, counter, handleChange } = props;

    // const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2 onMouseOver={handleChange}>{name} MouseOver Counter : {counter}</h2>
        </div>
    )
}

export default IncrementCounterHoc(MouseOverCounter);