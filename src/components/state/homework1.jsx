import React, { useState } from 'react';
import './homework1.css';

const HomeWork1 = () => {
    const [appleCount, setAppleCount] = useState(0);
    const [orangeCount, setOrangeCount] = useState(0);
    const [guavaCount, setGuavaCount] = useState(0);
    const [grapesCount, setGrapesCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [mangoCount, setMangoCount] = useState(0);

    const handleUniversal = (item, operation) => {
        if (item === 'apple') {
            if (operation === 'increment') {
                setAppleCount(appleCount + 1);
            } else {
                setAppleCount(appleCount - 1);
            }
        }
        if (item === 'orange') {
            if (operation === 'increment') {
                setOrangeCount(orangeCount + 1);
            } else {
                setOrangeCount(orangeCount - 1);
            }
        }
        if (item === 'guava') {
            if (operation === 'increment') {
                setGuavaCount(guavaCount + 1);
            } else {
                setGuavaCount(guavaCount - 1);
            }
        }
        if (item === 'grapes') {
            if (operation === 'increment') {
                setGrapesCount(grapesCount + 1);
            } else {
                setGrapesCount(grapesCount - 1);
            }
        }
        if (item === 'banana') {
            if (operation === 'increment') {
                setBananaCount(bananaCount + 1);
            } else {
                setBananaCount(bananaCount - 1);
            }
        }
        if (item === 'mango') {
            if (operation === 'increment') {
                setMangoCount(mangoCount + 1);
            } else {
                setMangoCount(mangoCount - 1);
            }
        }
    }

    return (
        <div>
            <h2 className='apple-head'>1. Apple: {appleCount}</h2>
            <button onClick={() => handleUniversal('apple', 'decrement')}  disabled={appleCount <= 0}>−</button>
            <button onClick={() => handleUniversal('apple', 'increment')} disabled={appleCount >= 10}>+</button>

            <h2 className='orange-head'>2. Orange: {orangeCount}</h2>
            <button onClick={() => handleUniversal('orange', 'decrement')} disabled={orangeCount <= 0}>−</button>
            <button onClick={() => handleUniversal('orange', 'increment')} disabled={orangeCount >= 10}>+</button>

            <h2 className='guava-head'>3. Guava: {guavaCount}</h2>
            <button onClick={() => handleUniversal('guava', 'decrement')} disabled={guavaCount <= 0}>−</button>
            <button onClick={() => handleUniversal('guava', 'increment')} disabled={guavaCount >= 10}>+</button>

            <h2 className='grapes-head'>4. Grapes: {grapesCount}</h2>
            <button onClick={() => handleUniversal('grapes', 'decrement')} disabled={grapesCount <= 0}>−</button>
            <button onClick={() => handleUniversal('grapes', 'increment')} disabled={grapesCount >= 10}>+</button>

            <h2 className='banana-head'>5. Banana: {bananaCount}</h2>
            <button onClick={() => handleUniversal('banana', 'decrement')} disabled={bananaCount <= 0}>−</button>
            <button onClick={() => handleUniversal('banana', 'increment')} disabled={bananaCount >= 10}>+</button>

            <h2 className='mango-head'>6. Mango: {mangoCount}</h2>
            <button onClick={() => handleUniversal('mango', 'decrement')} disabled={mangoCount <= 0}>−</button>
            <button onClick={() => handleUniversal('mango', 'increment')} disabled={mangoCount >= 10}>+</button>
        </div>
    );
}

export default HomeWork1;