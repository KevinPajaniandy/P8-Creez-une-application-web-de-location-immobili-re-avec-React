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
                {/* Map through the 'data' array and render a Card component for each item */}
                {data.map(item => (
                    <Card
                        key={item.id} //Assign a unique 'key' prop to each Card component
                        id={item.id} // Pass the 'id', cover, and title prop to the Card component
                        cover={item.cover}
                        title={item.title}
                    />
                ))}
            </section>
        </>
    )
}


