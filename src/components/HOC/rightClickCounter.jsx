import React from 'react';
import IncrementCounterHoc from './incrementCounterHoc';

const RightClickCounter = (props) => {
    // const [counter, setCounter] = useState(0);

    const { name, counter, handleChange } = props;
    return (
        <div>
            <h2>{name} Right Click Counter : {counter}</h2>
            <button onContextMenu={handleChange}>Right Click Counter</button>
        </div>
    )
}

const UpdatedComponent = IncrementCounterHoc(RightClickCounter)

export default UpdatedComponent;