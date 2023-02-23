import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';

import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';



function App() {
  return (
    <div className='App'>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
