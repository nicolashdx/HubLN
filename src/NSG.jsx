
import React, { createElement, appendChild, useState } from 'react';

import Navbar from './navbar';

import { CiCircleRemove } from "react-icons/ci";


import './nsg.css'

function NSG() {
  const [disciplinas, set_disciplinas] = useState([]);
  const [nsg_value, set_nsg_value] = useState(0);
  
  const calc_nsg = () => {
    var soma = 0;
    var peso = 0;
    for(var i=0; i < disciplinas.length; i++){
      const item = disciplinas[i];
      const nota = parseFloat(item.nota);
      const ch = parseFloat(item.carga_horaria);
      console.log(`Nota: ${nota} CH: ${ch}`)
      soma += nota*ch;
      peso += ch;
      
    }
    console.log(`Soma: ${soma} Peso: ${peso} NSG: ${(peso != 0) ? soma/peso : 0}`)
    set_nsg_value(soma/peso)
  }

  const add_disciplinas = () => {
    const ch_value = parseInt(document.getElementsByClassName('ch_input')[0].value);
    const nota_value = parseInt(document.getElementsByClassName('nota_input')[0].value);

    if(!nota_value || nota_value < 0 || nota_value > 100){
      window.alert("Valor de nota inválido.\nNota deve ser um valor entre 0 e 100.")
      return;
    }

    disciplinas.push({carga_horaria: ch_value, nota: nota_value})

    document.getElementsByClassName('ch_input')[0].value = 30;
    document.getElementsByClassName('nota_input')[0].value = '';
    
    calc_nsg();
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
            <button onClick={add_disciplinas}>+</button>
          </div>
          <div>
            <ul className='listDiscp'> 
            {disciplinas.map((item, index) => (
              <li key={index}>
                <p>{index+1}</p>
                <p>{item.carga_horaria}H</p>
                <p>{item.nota}</p>
                <button><CiCircleRemove /></button>
              </li>
            ))}
            </ul>
          </div>
          <div className='indiv'>
            <p>NSG:</p>
            <p className='nsgResult'>{parseFloat(nsg_value.toFixed(2))}</p>
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
