import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.scss'

export default function Header() {
    const location = useLocation()
    return (
        <header className='header-block'>
            <img className='header-block_logo' src={Logo} alt="logo de Kasa" />
            <nav>
                <ul className='header-block_nav'>
                    {/* Add the class 'active' to the Accueil link if the current location is '/' */}
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
                    {/* Add the class 'active' to the A Propos link if the current location is '/about' */}
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}