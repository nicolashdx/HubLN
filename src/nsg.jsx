
import React, { useState, useEffect } from 'react';

import Navbar from './navbar';

import { CiCircleRemove } from "react-icons/ci";

import './nsg.css'

function NSG() {
  const [disciplinas, set_disciplinas] = useState([]);
  const [nsg_value, set_nsg_value] = useState(0);
  const [conceito_value, set_conceito_value] = useState('F')
  
  const calc_nsg = () => {
    if(disciplinas.length === 0){
      set_nsg_value(0);
      set_conceito_value('F');
      return;
    }
    
    var soma = 0;
    var peso = 0;
    for(var i=0; i < disciplinas.length; i++){
      const item = disciplinas[i];
      const nota = parseFloat(item.nota);
      const ch = parseFloat(item.carga_horaria);
      soma += nota*ch;
      peso += ch;
    }
    const parcial = soma/peso

    set_nsg_value(parcial)

    if(parcial >= 90){
      set_conceito_value('A')
    }
    else if(parcial >= 80 && parcial < 90){
      set_conceito_value('B')
    }
    else if(parcial >= 70 && parcial < 80){
      set_conceito_value('C')
    }
    else if(parcial >= 60 && parcial < 70){
      set_conceito_value('D')
    }
    else if(parcial >= 40 && parcial < 60){
      set_conceito_value('E')
    }
    else if(parcial >= 0 && parcial < 40){
      set_conceito_value('F')
    }
  }

  const add_disciplinas = () => {
    const ch_value = parseInt(document.getElementById('ch_input').value);
    const nota_value = parseInt(documentgetElementById('nota_input').value);

    if(!nota_value || nota_value < 0 || nota_value > 100){
      documentgetElementById('nota_input').value = '';
      window.alert("Valor de nota inválido.\nNota deve ser um valor entre 0 e 100.")
      return;
    }

    const att_disciplinas = [...disciplinas, {carga_horaria: ch_value, nota: nota_value}];

    set_disciplinas(att_disciplinas);

    document.getElementById('ch_input').value = 30;
    documentgetElementById('nota_input').value = '';
  }

  const rm_disciplina = (index) => {
    const att_disciplinas = [...disciplinas];
    att_disciplinas.splice(index, 1);
    set_disciplinas(att_disciplinas);
  };

  useEffect(()=>{
    calc_nsg()
  }, [disciplinas])

  return (
    <>
    <div className='retangulo'></div>
    <div className='organizar'>
        <div className='contentNsg'>
          <p className='titulo'>Cálculo de NSG</p>
          <div className='indiv'>
            <p>Carga Horária:</p>
            <select id='ch_input'>
              <option value="30">30 H</option>
              <option value="45">45 H</option>
              <option value="60">60 H</option>
              <option value="90">90 H</option>
            </select>
            <p>Nota:</p>
            <input id='nota_input' type="number" placeholder='Ex: 75'/>
            <button onClick={add_disciplinas}>+</button>
          </div>
          <div>
            <ul className='listDiscp'> 
            {disciplinas.map((item, index) => (
              <li key={index}>
                <p>{index+1}</p>
                <p>{item.carga_horaria}H</p>
                <p>{item.nota}</p>
                <button onClick={index => rm_disciplina(index)}><CiCircleRemove /></button>
              </li>
            ))}
            </ul>
          </div>
          <div className='indiv'>
            <p>NSG:</p>
            <p className='nsgResult'>{parseFloat(nsg_value.toFixed(2))}</p>
            <p>Conceito:</p>
            <p className='conceitoResult'>{conceito_value}</p>
          </div>
          </div>
          <Navbar className="navbar"/>
        </div>
        
        
      
    </>
  )
}

export default NSG
