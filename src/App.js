import './App.css';
import React from 'react';
import ReduxCounter from "./components/ReduxComponent/counterRedux"


const App = () => {


  return (
    <div className='App'>
        <ReduxCounter />
    </div>
  );
};

export default App;


// for normal export import it with {} while for defult no need of {} in import.


// whenever props or state changes component will re-render.
