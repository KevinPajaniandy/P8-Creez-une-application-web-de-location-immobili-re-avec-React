import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Lodging from '../pages/Lodging/Lodging.jsx'
import About from '../pages/About/About.jsx'
import Error from '../pages/Error/Error.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer'

import './Router.scss';
function Router() {
    return (

        // Utilisez le composant BrowserRouter pour définir la gestion des routes

        <BrowserRouter>
            <div className='page'>
                <Header />
                <main className='main-style'>

                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/lodging/:id" element={<Lodging />} />
                        <Route path="about" element={<About />} />
                        {/* Route pour toutes les autres pages inconnues, affichant le composant Error */}
                        <Route path="*" element={<Error />} />

                    </Routes>

                </main>
            </div>
            <Footer />
        </BrowserRouter>

    )
}

export default Router