import React from 'react';

import Navbar from './navbar';

import { Link } from 'react-router-dom';

import './gradeplanner.css'


function GradePlanner({setNav}) {
  setNav(true);
  return (
    <>
      <div className='contentGP'>
        <div className='upperparts'> 
          <input></input>
          <select
          /><span>Disciplinas</span>
          <div className='totalhoras'>
            <p> Horas totais:</p>
            <p className='horas'></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GradePlanner
