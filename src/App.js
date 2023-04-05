import React from 'react';
import './style.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main.js';
import About from './About.js';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Other from './Other.js';
import PageNot from './PageNot.js';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="other" element={<Other />} />
          <Route path="/*" element={<PageNot/>} />
        </Route>
      </Routes>
    </div>
  );
}
