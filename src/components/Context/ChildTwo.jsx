import React from 'react'
import ChildThree from './ChildThree';
import ChildFour from './ChildFour';

const ChildTwo = () => {
    return (
        <div>
            <ChildThree />
            <ChildFour />
        </div>
    )
}

export default ChildTwo;