import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft, FaInstagram, FaGoogleDrive } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";

import './navbar.css'

function Navbar() {
  return (
    <nav>
      <ul className='navigation'>
        <li>
          <Link to="/">
            <a className='icon' href="">
              <FaArrowLeft />
            </a>
          </Link>
        </li>
        <li>
          <a className='icon' href="https://www.instagram.com/zeus.g3e/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a className='icon' href="https://drive.google.com/drive/folders/0Bza5WseGdGvvOW82ckN2TEtGeFk?resourcekey=0-5L4NShYSxGIQ2zYH6WtPFA&usp=sharing" target="_blank">
            <FaGoogleDrive />
          </a>
        </li>
        <li>
          <a className='icon' href="https://chat.whatsapp.com/Fi8Pw4T3n2eFI38pUBccPD" target="_blank">
            <IoChatbubble />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;