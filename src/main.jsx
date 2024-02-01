import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.jsx';
import NSG from './nsg.jsx'
import GradePlanner from './gradeplanner.jsx';
import Test from './test.jsx';

import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <Router basename='/HubLN'>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nsg" element ={<NSG />} />
        <Route path="/grade" element ={<GradePlanner />} />
        <Route path="/test" element ={<Test />} />
      </Routes>
    </div>
  </Router>
);
