import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import ReactMemoExample from './components/MemoAndCallback/reactMemoAndCallback';
import ControlledAndUncontrolledComponent from './components/ControlledAndUncontrolledComponents/contAndUncontComp';

const App = () => {

  const [randomNumber, setRandomNumber] = useState(Math.random());
  const [counter, setCounter] = useState(0);

  const handleChange = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  useEffect(() => {
    console.log("Message Stage Updated")
  }, [randomNumber])

  useEffect(() => {
    setInterval(() => {
      console.log("Interval Created")
      setRandomNumber(Math.random().toFixed(2));
    }, 2000)
  },[])

  return (
    <div className='App'>
      <h2>Random Number: {randomNumber}</h2>
      <ReactMemoExample handleChange={handleChange} counter={counter} />
      < ControlledAndUncontrolledComponent />
    </div>
  );
};

export default App;


// for normal export import it with {} while for defult no need of {} in import.


// whenever props or state changes component will re-render.
