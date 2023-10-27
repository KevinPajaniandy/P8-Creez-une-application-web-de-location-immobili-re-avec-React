import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoHeader from '../../assets/logo.png'
import './Header.scss'

function Header() {
  return (
    <header className='header'>
        <div className='header__logo'>
            <img  src={LogoHeader} alt='Kasa' />
        </div>
        
            <NavLink  to="/">
                <div>Accueil</div>
            </NavLink>    

            <NavLink to="/about">
                <div>A Propos</div>
            </NavLink>    
        
    </header>
  )
}

export default Header