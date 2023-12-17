import React from 'react';

import Navbar from './navbar';

import './gradeplanner.css'

function GradePlanner() {
  return (
    <>
      <div className='container'>
        <p>Montar Grade</p>
        <a className='test' href="/test"><p>Teste</p></a>
        <Navbar />
      </div>
    </>
  )
}

export default GradePlanner
