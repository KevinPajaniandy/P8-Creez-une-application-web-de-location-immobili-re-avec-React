import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Layout() {
    return (
        <div>
            <Header />
            <main className='main-style'>
                <Outlet />{/* This is where the child routes will be rendered */}
            </main>
            <Footer />
        </div>
    )
}

export default Layout