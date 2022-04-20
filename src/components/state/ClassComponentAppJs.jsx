import './App.css';
import React, {useState} from 'react';
// import Events from './components/events/events';
import ClassComponent from './components/state/ClassComponent';
import Welcome from './components/welcomeFunctional'

function App() {

  const [showCounterClass, setShowCounterCLass] = useState(true);

  setTimeout(() => {
    setShowCounterCLass(false)
  }, 5000)

  return (
    <div className="App">
      {/* <Events /> */}
      {
        showCounterClass ?
        <ClassComponent />
        : <Welcome />
      }
    </div>
  );
}

export default App;

// for normal export import it with {} while for defult no need of {} in import.


// whenever props or state changes component will re-render.
