import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import NSG from './NSG.jsx'

import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nsg" element ={<NSG />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
