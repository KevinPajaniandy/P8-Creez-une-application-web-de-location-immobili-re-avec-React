import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import data from '../../data/db.json'
import HomeImage from '../../assets/photo-home.png'
import './Home.scss'

export default function Home() {

    return (
        <>
            <Banner bannerImage={HomeImage} bannerTitle="Chez vous, partout et ailleurs" />
            <section className="card-container">
                {/* Parcourir le tableau 'data' et rendre un composant Card pour chaque élément */}
                {data.map(item => (
                    <Card
                        key={item.id} // Attribuer une clé unique à la prop 'key' pour chaque composant Card
                        id={item.id} // Passer les props 'id', 'cover', et 'title' au composant Card
                        cover={item.cover}
                        title={item.title}
                    />
                ))}
            </section>
        </>
    )
}


