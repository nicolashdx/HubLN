import React from 'react';

import Navbar from './navbar';

import { Link } from 'react-router-dom';

import './gradeplanner.css'


function GradePlanner() {
  return (
    <>
      <div className='retangulo_in'></div>
      <div className='container'>
        <div className= 'field'>
        <input
         type="text"
         placeholder="materias"/>

          </div>
          
        <Navbar />
      </div>
    </>
  )
}

export default GradePlanner
