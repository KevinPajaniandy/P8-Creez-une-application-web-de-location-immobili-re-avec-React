import React, { useState } from 'react';
import './Carousel.scss';
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';


export default function Carousel({ pictures, title }) {

    // Définissez une variable d'état 'currentIndex' pour suivre l'index de l'image actuellement affichée 
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image précédente dans le tableau 'pictures'
    const slidePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    // Fonction pour passer à l'image suivante dans le tableau 'pictures'
    const slideNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1));
    };

    const singlePicture = pictures.length <= 1;


    return (
        <div className='carousel'>
            {!singlePicture && (
                <>
                    <img className='carousel_arrow-left' src={ArrowLeft} alt='Previous' onClick={slidePrevious} />
                    <img className='carousel_slide' src={pictures[currentIndex]} // Afficher l'image correspondant à l'index actuel
                        alt={title} />

                    <img className='carousel_arrow-right' src={ArrowRight} alt='Next' onClick={slideNext} />
                    <p className='carousel_index'>{currentIndex + 1} / {pictures.length} </p> {/* Affiche l'index de la photo actuellement affichée par rapport au nombre total d'images */}
                </>
            )}
            {singlePicture && (
                <img
                    className='carousel_slide' src={pictures[currentIndex]} alt={title} />
            )}
        </div>
    );
}


