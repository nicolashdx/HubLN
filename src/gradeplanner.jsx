import React from 'react';

import Navbar from './navbar';

import { Link } from 'react-router-dom';

import './gradeplanner.css'

function GradePlanner() {
  return (
    <>
      <div className='retangulo_in'></div>
      <div className='container'>
        <p>Montar Grade</p>
        <Link to="/test"><p>Teste</p></Link>
        <></>
        <Navbar />
      </div>
    </>
  )
}

export default GradePlanner
