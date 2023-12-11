import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><img src="src\assets\arrow.svg" alt="Descrição da Imagem" /></Link>
        </li>
        <li>
          <a href="https://www.instagram.com/zeus.g3e/" target="_blank">
            <img src="src\assets\instagram.svg" alt="Perfil do G3E no Instagram" />
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/drive/folders/0Bza5WseGdGvvOW82ckN2TEtGeFk?resourcekey=0-5L4NShYSxGIQ2zYH6WtPFA&usp=sharing" target="_blank">
            <img src="src\assets\gdrive.svg" alt="Perfil do G3E no Instagram" />
          </a>
        </li>
        <li>
          <a href="https://chat.whatsapp.com/Fi8Pw4T3n2eFI38pUBccPD" target="_blank">
            <img src="src\assets\chat.svg" alt="Grupo Geral de EE no Whatsapp" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;