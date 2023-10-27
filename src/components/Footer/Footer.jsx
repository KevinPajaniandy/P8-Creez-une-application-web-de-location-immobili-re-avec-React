import React from 'react'
import './Footer.scss'
import LogoFooter from '../../assets/footer-logo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img  src={LogoFooter} alt='footer' />
        </div>
        <div className='footer__text'>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer