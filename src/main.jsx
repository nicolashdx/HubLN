import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.jsx';
import NSG from './nsg.jsx'
import GradePlanner from './gradeplanner.jsx';

import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nsg" element ={<NSG />} />
      <Route path="/grade" element ={<GradePlanner />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
