import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

function Home() {
  return (
    <>
      <div className='container'>
        <div className='content'>
        <div>
            <p className='welcome'>BEM <br></br> VINDES!</p>
            <p className= 'textintro'>Esse projeto foi realizado pelo G3E com o intuito de ajudar nós meros estudantes.(texto a se discutir)</p>
            <div className='links'>
              <a href="https://www.instagram.com/zeus.g3e/" target="_blank">
                <img src="src\assets\instagram.svg" alt="Perfil do G3E no Instagram" />
              </a>
              <a href="https://drive.google.com/drive/folders/0Bza5WseGdGvvOW82ckN2TEtGeFk?resourcekey=0-5L4NShYSxGIQ2zYH6WtPFA&usp=sharing" target="_blank">
                <img src="src\assets\gdrive.svg" alt="Perfil do G3E no Instagram" />
              </a>
              <a href="https://chat.whatsapp.com/Fi8Pw4T3n2eFI38pUBccPD" target="_blank">
                <img src="src\assets\chat.svg" alt="Grupo Geral de EE no Whatsapp" />
              </a>
            </div>
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
