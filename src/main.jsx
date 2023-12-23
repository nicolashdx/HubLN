import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import NSG from './NSG.jsx'
import GradePlanner from './gradeplanner.jsx';
import Test from './test.jsx';

import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <Router basename='/HubLN'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nsg" element ={<NSG />} />
      <Route path="/grade" element ={<GradePlanner />} />
      <Route path="/test" element ={<Test />} />
    </Routes>
  </Router>
);
