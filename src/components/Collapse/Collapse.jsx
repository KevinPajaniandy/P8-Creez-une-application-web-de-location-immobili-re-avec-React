import React, { useState } from 'react'
import './Collapse.scss'
import ArrowUp from '../../assets/up-arrow.png'

const Collapse = ({ title, children }) => {
    // Définir une variable d'état 'isOpen' pour suivre si le collapse est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Fonction pour basculer l'état du collapse lorsqu'on clique sur le bouton
    };

    return (
        <div className='collapse'>
            {/* Rendre le bouton collapse avec une classe conditionnelle 'rotate' si 'isOpen' est vrai */}
            <div className={`collapse_name ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse}>
                {title}
                <img src={ArrowUp} alt={ArrowUp} />
            </div>
            {/* Rendre le contenu à l'intérieur d'une div avec la classe 'collapse_content' si 'isOpen' est vrai */}
            <div className={`collapse_content ${isOpen ? 'open' : 'close'}`}>{children}</div>
        </div>
    )
}

export default Collapse