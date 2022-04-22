import React, { memo } from 'react';

const ReactMemoExample =({ handleChange, counter}) => {
    console.log("React Memo Example");
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleChange}>Click</button>
        </div>
    )
}

export default memo(ReactMemoExample);

//read about useMemo Hook