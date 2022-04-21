import './App.css';
import React from 'react';
import RegularComponent from "./components/pureComponents/regularComponent";
import PureComponentExample from './components/pureComponents/pureComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // msg: "Hello"
      arr: [10, 20, 30]
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     msg: "Hello",
    //   })
    // }, 2000)

    // setInterval(() => {
    //   const val = Math.round(10*Math.random())
    //   // this.state.arr.push(val);
    //   const updatedArr = [...this.state.arr, val];
    //   this.setState({
    //     arr: updatedArr,
    //   })
    // }, 2000)
  }

  render() {
    console.log("Parent Component")
    return (
      <h2 className='App'>
        Parent:
        {/* <h1>Message: {this.state.msg}</h1> */}
        {
          this.state.arr.map((val) => (
            <span>{`${val} `}</span>
          ))
        }

        <RegularComponent arr={this.state.arr} />
        <PureComponentExample arr={this.state.arr} />
      </h2>
    )
  }
}

export default App;


// for normal export import it with {} while for defult no need of {} in import.


// whenever props or state changes component will re-render.
