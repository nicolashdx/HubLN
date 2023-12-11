import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

function Home() {
  return (
    <>
      <div className='container'>
        <div className='content'>
        <div>
            <p className='welcome'>BEM <br></br> VINDE!</p>
            <p className= 'textintro'>Esse projeto foi realizado pelo G3E com o intuito de ajudar nós meros estudantes.(texto a se discutir)</p>
        </div>
        <div className='buttons'>
            <Link to="/nsg"><button>Cálculo de NSG</button></Link>
            <Link to="/grade"><button>Montar Grade</button></Link>
            <Link to="/"><button>Em breve</button></Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
