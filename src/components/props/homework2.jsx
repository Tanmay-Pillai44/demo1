import React from 'react';
import './homework2.css'

const Homework2 = (props) => {

    const {label, price, handleClick, index} = props;

    return (
        <div>
            <h2>{label}: ₹ {price}</h2>
            <button onClick={() => {handleClick(index, 'decrement')}} disabled={price <= 0}>−</button>
            <button onClick={() => {handleClick(index, 'increment')}} disabled={price >= 200}>+</button>
        </div>
    )
}

export default Homework2;