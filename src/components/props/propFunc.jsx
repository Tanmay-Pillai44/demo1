import React from 'react';


const PropFunc = (props) => {
    const { label, counter, handleIncrement, index } = props; //destructuring

    const handleChildClick = () => {
        handleIncrement(index);
    }
    return (
        <div>
            <h1>{label} {counter}</h1>
            <button onClick={handleChildClick}>+</button>
        </div>
    )
}

export default PropFunc;

// const fn1 = (val) => {
//     console.log("Function-1", val);
// }

// fn1(10);