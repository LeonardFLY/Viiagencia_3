import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Contact from './Components/Contact/ContactUs'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import Promocoes from './Pages/Promocoes/Promocoes';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/Promocoes" exact element={<Promocoes></Promocoes>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
