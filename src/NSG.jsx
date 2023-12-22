
import React, { createElement, appendChild, useState } from 'react';

import Navbar from './navbar';

import { CiCircleRemove } from "react-icons/ci";


import './nsg.css'

function NSG() {
  const [quant_discp, set_quant_discp] = useState(1)
  
  const add_discp = () => {
    const nota_value = document.getElementsByClassName('nota_input')[0].value
    if (!nota_value || nota_value < 0 || nota_value > 100){
      console.log("Valor de nota inválido.")
      return;
    }
     
    const ch = document.createElement('p');
    ch.textContent = `${document.getElementsByClassName('ch_input')[0].value}H`;
    ch.className = 'ch'

    const nota = document.createElement('p');
    nota.textContent = `${nota_value}`;
    nota.className = 'nota';

    const btn = document.createElement('button');
    btn.innerText = "X"
    btn.classList.add('remove')

    var item = document.createElement('li');
    item.appendChild(document.createTextNode(`${quant_discp}`));
    item.appendChild(ch);
    item.appendChild(nota);
    item.appendChild(btn);

    var list = document.getElementsByClassName('listDiscp')[0];
    list.appendChild(item);

    document.getElementsByClassName('ch_input')[0].value = '30'
    document.getElementsByClassName('nota_input')[0].value = ''
    
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
            <select className='ch_input'>
              <option value="30">30 H</option>
              <option value="45">45 H</option>
              <option value="60">60 H</option>
              <option value="90">90 H</option>
            </select>
            <p>Nota:</p>
            <input className='nota_input' type="number" placeholder='Ex: 75'/>
            <button onClick={add_discp}>+</button>
          </div>
          <div>
            <ul className='listDiscp'>
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
