import React, { useState } from 'react';
import './Carousel.scss';
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';


export default function Carousel({ pictures, title }) {

    //Define a state variable 'currentIndex' to track the index of the current displayed picture 
    const [currentIndex, setCurrentIndex] = useState(0);

    //Function to move to the previous picture in the 'pictures' array
    const slidePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    //Function to move to the next picture in the 'pictures' array
    const slideNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1));
    };

    const singlePicture = pictures.length <= 1;


    return (
        <div className='carousel'>
            {!singlePicture && (
                <>
                    <img className='carousel_arrow-left' src={ArrowLeft} alt='Previous' onClick={slidePrevious} />
                    <img className='carousel_slide' src={pictures[currentIndex]} // Display the image corresponding to the current index
                        alt={title} />

                    <img className='carousel_arrow-right' src={ArrowRight} alt='Next' onClick={slideNext} />
                    <p className='carousel_index'>{currentIndex + 1} / {pictures.length} </p>
                </>
            )}
            {singlePicture && (
                <img
                    className='carousel_slide' src={pictures[currentIndex]} alt={title} />
            )}
        </div>
    );
}


