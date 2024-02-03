import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaGoogleDrive } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { IoChatbubble } from "react-icons/io5";

import './home.css'

function Home({setNav}) {
  setNav(false)
  return (
    <>
      <div className='content'>
        <div>
            <p className='welcome'>BEM <br></br> VINDOS!</p>
            <p className= 'textintro'>Esse projeto foi realizado pelo G3E com o intuito de ajudar nós meros estudantes.(texto a se discutir)</p>
            <div className='linksDiv'>
              <a href="https://www.instagram.com/zeus.g3e/" target="_blank">
                <RiInstagramFill className='links'/>
              </a>
              <a href="https://drive.google.com/drive/folders/0Bza5WseGdGvvOW82ckN2TEtGeFk?resourcekey=0-5L4NShYSxGIQ2zYH6WtPFA&usp=sharing" target="_blank">
                <FaGoogleDrive className='links'/>
              </a>
              <a href="https://chat.whatsapp.com/Fi8Pw4T3n2eFI38pUBccPD" target="_blank">
                <IoChatbubble className='links'/>
              </a>
            </div>
        </div>
        <div className='buttons'>
            <Link to="/nsg"><button>Cálculo de NSG</button></Link>
            <Link to="/grade"><button>Montar Grade</button></Link>
            <Link to="/test"><button>Traçar Percurso Acadadêmico</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home
