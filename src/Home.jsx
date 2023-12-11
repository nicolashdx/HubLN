import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

function Home() {
  return (
    <>
      <div className='container'>
        <div>
            <p className='welcome'>BEM VINDX!</p>
            <p >Esse projeto foi realizado pelo G3E com o intuito de ajudar nós meros estudantes.</p>
        </div>
        <div className='buttons'>
            <button><Link to="/nsg">Cálculo de NSG</Link></button>
            <button><Link to="/grade">Montar Grade</Link></button>
            <button>Em breve</button>
        </div>
      </div>
    </>
  )
}

export default Home
