import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import NSG from './NSG.jsx'
import GradePlanner from './gradeplanner.jsx';
import Test from './test.jsx';

import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nsg" element ={<NSG />} />
      <Route path="/grade" element ={<GradePlanner />} />
      <Route path="/test" element ={<Test />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
