import './App.css';
import React, {useState} from 'react';
import { cloneDeep } from 'lodash';
// import WelcomeFunctionalComponent from './components/welcomeFunctional';
// import WelcomeClass from './components/welcomeClass';
// import StateFunc from './components/state/stateFunc';
// import ExampleStateFunc from './components/state/exampleStateFunc';
// import Counter from './components/state/counter';
// import HomeWork1 from './components/state/homework1';
// import PropFunc from './components/props/propFunc';
import Homework2 from './components/props/homework2';


// const arr = [10, 20, 40, 60, 80];

const myStore = [
  {
    label: 'Apple',
    price: 10
  },
  {
    label: 'Grapes',
    price: 20
  },
  {
    label: 'Orange',
    price: 30
  },
  {
    label: 'Banana',
    price: 40
  },
  {
    label: 'Guava',
    price: 50
  }
]
function App() {
  // const [counter, setCounter] = useState(0);
  // const [countArr, setCountArr] = useState(arr);
  // countArr => 145
  // It is only updating th value and not the reference
  // sp always change the reference to update ui(rerender component)
  // [], {} => pass by reference
  // Number, Stirng => pass by value
  const handleIncrement = (index) => {
    // const copyCountArr = [...countArr]; // refernce changed

    const copyCountArr = cloneDeep(countArr);

    copyCountArr[index] =copyCountArr[index] + 10;
    // copyCountArr[index].price
    setCountArr(copyCountArr);
    console.log(countArr);
  }

  return (
    <div className="App">
      {/* <h1>Welcome To Fruits Store</h1> */}
      {/* <WelcomeFunctionalComponent /> */}
      {/* <WelcomeClass /> */}
      {/* <StateFunc /> */}
      {/* <ExampleStateFunc /> */}
      {/* <Counter /> */}
      {/* <HomeWork1 /> */}
      {/* <PropFunc
        label="Current State:"
        counter={counter}
        handleIncrement = {handleIncrement}
      /> */}
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}
      {/* {
        countArr.map((count, i) => {
          const {label, price} = obj;
          return (
            <PropFunc
              label={`Current Value:`}
              counter={count}
              handleIncrement = {handleIncrement}
              index={i}
            />
          );
        })
      } */}

      {

      }
    </div>
  );
}

export default App;

// for normal export import it with {} while for defult no need of {} in import.

// whenever props or state changes component will re-render.
