
import React from 'react';

import Navbar from './navbar';

import './nsg.css'

function NSG() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <p>CALCULO DE NSG</p>
          <div>
            <p>Carga Horária:</p>
            <input type="text" placeholder='60' />
            <p>Nota:</p>
            <input type="text" placeholder='75'/>
            <button>+</button>
          </div>
          <div>
            <ul>
              <li>
                <p>1</p>
                <p>60h</p>
                <p>82</p>
                <button>x</button>
              </li>
              <li>
                <p>2</p>
                <p>30h</p>
                <p>100</p>
                <button>x</button>
              </li>
            </ul>
          </div>
          <div>
            <p>NSG:</p>
            <p className='nsgResult'></p>
            <p>Conceito:</p>
            <p className='conceitoResult'></p>
          </div>
        </div>
        
        <Navbar className="navbar"/>
      </div>
      
    </>
  )
}

export default NSG
