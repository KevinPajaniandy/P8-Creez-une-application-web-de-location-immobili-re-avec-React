import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

export default function Card({ id, cover, title }) {
    return (
        <article className='card-lease'>
            {/* Créez un lien qui navigue vers la page 'Logement' avec l'identifiant ('id') correspondant */}
            <Link to={`/lodging/${id}`}>
                <div className='card-lease_overlay'></div>
                <img className="card-lease_img" src={cover} alt={title} />
                <h2 className='card-lease_title'>{title}</h2>
            </Link>
        </article>
    )
}