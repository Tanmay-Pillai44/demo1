import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Link, Routes, Navigate } from "react-router-dom";
import Home from './components/RoutingComponent/Home';
import About from './components/RoutingComponent/About';
import Contact from './components/RoutingComponent/Contact';
import MyData from './components/RoutingComponent/myData';
import NotFound from './components/RoutingComponent/notFound';
import Television from './components/RoutingComponent/Tv';

function App() {

  const navLinkStyle = (params) => {
    const {isActive} = params;
    return getActiveCss(isActive);
  }

  const getActiveCss = (isActive) => {
    if(isActive) {
      return {
        color: 'green',
        backgroundColor: 'red'
      }
    } else {
      return {

      }
    }
  }

  return (
    <BrowserRouter>
      <div className="App">

        {/* <div><Link to='/home'>Home</Link></div>
        <div><Link to='/about'>About</Link></div>
        <div><Link to='/contact'>Contact</Link></div>
        <div><Link to='/contact/mydata'>My Data</Link></div>

        <div><a href="/contact">contact with anchor tag</a></div> */}

        {/* <ul>
          <li>
            <NavLink
              to='./home'
              style={navLinkStyle}
            >Home</NavLink>
          </li>
          <li>
            <NavLink to='./about'>About</NavLink>
          </li>
          <li>
            <NavLink to='./contact'>Contact</NavLink>
          </li>
        </ul> */}

        <Routes>
          <Route path='/' element={<MyData />} />
          <Route path='/tv/:name/:type' element={<Television />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/not-found' />} />


        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

// for normal export import it with {} while for defult no need of {} in import.


// whenever props or state changes component will re-render.
