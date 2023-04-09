import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import "../styles/NavBar.css"

// Importamos Context
import ThemeConext from '../context/ThemeContext';

export default function NavBar() {

  const {theme, themeHanldeOnClick} = useContext(ThemeConext);

  return (
    <div className='navBar-container' style = {{background: theme.background}}>
        <nav className='navBar'>
            <ul className='navBar-list'>
              <li><Link id='navBar-item' to='/home'>Home</Link></li>
              <li><Link id='navBar-item' to='/contacto'>Contactos</Link></li>
              <li><Link id='navBar-item' to='/destacado'>Destacados</Link></li>
              <li><button className='theme-button' onClick={themeHanldeOnClick}>Change Theme</button></li>
            </ul>
          </nav>
    </div>
  )
}
