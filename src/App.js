import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Snack from './Snack';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Snack />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;