import React, { useState } from 'react';

const Counter = () => {
    const [mobileCount, setMobileCount] = useState(0);
    const [laptopCount, setLaptopCount] = useState(0);

    const handleIncrement = () => {
        if (mobileCount >= 5) return;
        setMobileCount(mobileCount + 1);
    }

    const handleDecrement = () => {
        if (mobileCount === 0) return;
        setMobileCount(mobileCount - 1);
    }

    const handleLaptopIncrement = () => {
        if (mobileCount >= 5) return;
        setLaptopCount(laptopCount + 1);
    }

    const handleLaptopDecrement = () => {
        if (mobileCount === 0) return;
        setLaptopCount(laptopCount - 1);
    }

    const handleUniversal = (param, operation) => {
        if(param === 'mobile') {
            if (operation === 'increment') {
                setMobileCount(mobileCount + 1);
            } else {
                setMobileCount(mobileCount - 1);
            }
        }
        if(param === 'laptop') {
            if (operation === 'increment') {
                setLaptopCount(laptopCount + 1);
            } else {
                setLaptopCount(laptopCount - 1);
            }
        }
    }

    return (
        <div>
            <h2> Mobile: {mobileCount}</h2>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <h2>Laptop: {laptopCount}</h2>
            <button onClick={handleLaptopDecrement} disabled={laptopCount <= 0}>Decrease</button>
            <button onClick={handleLaptopIncrement} disabled={laptopCount >= 5}>Increase</button> <br /> <br />
            <button onClick={() => handleUniversal('mobile', 'increment')}>Increment-mobile</button>
            <button onClick={() => handleUniversal('laptop', 'increment')}>Increment-laptop</button>
        </div>
    );
}

export default Counter;

// six categories for universAL