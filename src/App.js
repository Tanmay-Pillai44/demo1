import './App.css';
import React, { createContext, useState } from 'react';
import ChildOne from './components/Context/ChildOne';

const MyName = createContext();
export const Institute = createContext();
export const MyCounter = createContext();

function App() {

  const [counter, setCounter] = useState(0);

  const obj = {
    counter,
    handleChange: () => setCounter(counter + 1)
  }

  return (
    <div className='App'>
      <h2>App Counter: {counter}</h2>
      <MyName.Provider value ={"Tanmay"}>
        <Institute.Provider value ={"Prepbytes"}>
            <MyCounter.Provider value={obj}>
              <ChildOne />
            </MyCounter.Provider>
        </Institute.Provider>
      </MyName.Provider>
    </div>
  );
}

export default App;
export { MyName };

// for normal export import it with {} while for defult no need of {} in import.


// whenever props or state changes component will re-render.
