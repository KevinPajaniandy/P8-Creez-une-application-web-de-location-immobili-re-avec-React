import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.scss'

export default function Header() {
    const location = useLocation()
    return (
        <header className='header-block'>
            <Link to="/" className=''> <img className='header-block_logo' src={Logo} alt="logo de Kasa" /></Link>

            <nav>
                <ul className='header-block_nav'>
                    {/* Ajouter la classe 'active' au lien Accueil si l'emplacement actuel est '/' */}
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
                    {/* Ajouter la classe 'active' au lien A Propos si l'emplacement actuel est '/about'*/}
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}