import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Lodging from '../pages/Lodging/Lodging.jsx'
import About from '../pages/About/About.jsx'
import Error from '../pages/Error/Error.jsx'
import Layout from '../components/Layout/Layout.jsx'

function Router() {
    return (

        // Use the BrowserRouter component to define routing

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/lodging/:id" element={<Lodging />} />
                    <Route path="about" element={<About />} />
                    {/* Route for all other unknown pages, displaying the Error component */}
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router