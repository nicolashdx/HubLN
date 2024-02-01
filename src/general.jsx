import React, {useState} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.jsx';
import NSG from './nsg.jsx'
import GradePlanner from './gradeplanner.jsx';
import Test from './test.jsx';

import Navbar from './navbar';

import './general.css';

function General(){
    const [sidebar, setsidebar] = useState(false); 
    
    const rec_in = {
        animationName: 'enter',
        animationDuration: '0.5s',
        animationFillMode: 'forwards',
        transform: 'translateX(0%)'
    };

    const rec_out = {
        animationName: 'exit',
        animationDuration: '0.5s',
        animationFillMode: 'forwards',
        transform: 'translateX(100%)'
    };

    return(
        <>
        <Router basename='/HubLN'>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home setNav={setsidebar}/>} />
            <Route path="/nsg" element ={<NSG setNav={setsidebar}/>} />
            <Route path="/grade" element ={<GradePlanner setNav={setsidebar} />} />
            <Route path="/test" element ={<Test setNav={setsidebar} />} />
        </Routes>
        <div style={{display: ((sidebar) ? 'flex' : 'none')}}>
            <Navbar setNav={setsidebar}></Navbar>
        </div>
        <div className="sidebar" style={(sidebar) ? rec_in : rec_out}></div>
        </div>
      </Router>
      </>
    )
}

export default General