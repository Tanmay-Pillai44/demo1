// import './App.css';
// import React, {useState} from 'react';
// import { cloneDeep } from 'lodash';
// import Homework2 from './components/props/homework2';

// const myStore = [
//   {
//     label: 'Apple',
//     price: 25,
//     priceVary: 25,
//     id: 1
//   },
//   {
//     label: 'Grapes',
//     price: 20,
//     priceVary: 20,
//     id: 2
//   },
//   {
//     label: 'Orange',
//     price: 30,
//     priceVary: 15,
//     id: 3
//   },
//   {
//     label: 'Banana',
//     price: 40,
//     priceVary: 10,
//     id: 4
//   },
//   {
//     label: 'Guava',
//     price: 50,
//     priceVary: 5,
//     id: 5
//   }
// ]
// function App() {

//   const [countArr, setCountArr] = useState(myStore);

//   const handleClick = (index, operation) => {
//     const copyCountArr = cloneDeep(countArr);
//     if (operation === 'increment') {
//       copyCountArr[index].price += copyCountArr[index].priceVary;
//     } else {
//       copyCountArr[index].price -= copyCountArr[index].priceVary;
//     }
//     setCountArr(copyCountArr);
//   }

//   return (
//     <div className="App">
//       <h1>Welcome To Fruits Store</h1>
//       {
//         countArr.map((obj, i) => {
//           const {label, price, id} = obj;
//           return (
//             <Homework2
//               label={label}
//               price={price}
//               handleClick={handleClick}
//               index={i}
//               key={id}
//             />
//           );
//         })
//       }
//     </div>
//   );
// }

// export default App;

// // for normal export import it with {} while for defult no need of {} in import.

// // whenever props or state changes component will re-render.
