import React from 'react'
import Banner from '../../components/Banner/Banner'
//import Card from '../../components/Card/Card'
//import data from '../../data/db.json'
import HomeImage from '../../assets/photo-home.png'
import './Home.scss'

export default function Home() {

    return (
        <div>
            <Banner bannerImage={HomeImage} bannerTitle="Chez vous, partout et ailleurs" />
        </div>
    )
}


