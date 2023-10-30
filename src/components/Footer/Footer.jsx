import React from 'react'
import Logo from '../../assets/footer-logo.png'
import './Footer.scss'

function Footer() {
    return (
        <footer className='footer-block'>
            <img src={Logo} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer