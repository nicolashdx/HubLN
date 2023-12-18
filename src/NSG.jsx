
import React, { createElement, useState } from 'react';

import Navbar from './navbar';

import { CiCircleRemove } from "react-icons/ci";


import './nsg.css'

function NSG() {
  const [quant_discp, set_quant_discp] = useState(1)
  
  const add_discp = () => {
    const ch = document.createElement('p');
    ch.textContent = `${document.getElementsByClassName('ch')[0].value}H`

    const nota = document.createElement('p');
    nota.textContent = `${document.getElementsByClassName('nota')[0].value}`

    var item = document.createElement('li');
    item.appendChild(document.createTextNode(`${quant_discp}`));
    item.appendChild(ch);
    item.appendChild(nota);

    var list = document.getElementsByClassName('listDiscp')[0];
    list.appendChild(item);
    
    set_quant_discp(quant_discp + 1);
  }

  return (
    <>
    <div className='retangulo'></div>
    <div className='organizar'>
        <div className='contentNsg'>
          <p className='titulo'>Cálculo de NSG</p>
          <div className='indiv'>
            <p>Carga Horária:</p>
            <input className='ch' type="number" placeholder='Ex: 60'/>
            <p>Nota:</p>
            <input className='nota' type="number" placeholder='Ex: 75'/>
            <button onClick={add_discp}>+</button>
          </div>
          <div>
            <ul className='listDiscp'>
              <li>
                <p>1</p>
                <p>60h</p>
                <p>82</p>
                <button><CiCircleRemove /></button>
              </li>
              <li>
                <p>2</p>
                <p>30h</p>
                <p>100</p>
                <button><CiCircleRemove /></button>
              </li>
            </ul>
          </div>
          <div className='indiv'>
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
