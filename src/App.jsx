import React from 'react'
import Header from './components/Header/Header.jsx'
import Banner from './components/Banner/Banner.jsx'
import Apartment from './components/Apartment/ApartmentGrid.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.scss'

function App() {
  return (
    <div>
      <Header />
      <Main>    
        <Banner />
        <Apartment />
      </Main>  
      <Footer />
    </div>
  )
}

export default App