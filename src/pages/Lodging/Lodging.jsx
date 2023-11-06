import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Lodging.scss';
import data from '../../data/db.json';
import Carousel from '../../components/Carousel/Carousel';
import Host from '../../components/Host/Host';
import TitleAndLocation from '../../components/TitleAndLocation/TitleAndLocation';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';

const Lodging = () => {
    const { id } = useParams(); // Extract the 'id' parameter from the URL using useParams hook

    // The useNavigate hook allows you to programmatically navigate to different routes in your application.
    const navigate = useNavigate();
    const [lodgingData, setLodgingData] = useState();

    useEffect(() => {
        // Find the lodgingItems data that matches the 'id'
        const lodgingItems = data.find((item) => item.id === id);
        if (!lodgingItems) {

            // If lodgingItems data is not found, navigate to the error page
            navigate('*');
        } else {
            setLodgingData(lodgingItems)
        }
    }, [lodgingData, navigate, id]);

    if (lodgingData) {
        return (

            <section>
                <Carousel pictures={lodgingData.pictures} title={lodgingData.title} />
                <div className='block'>
                    <div className='block_titleAndTag'>
                        <TitleAndLocation title={lodgingData.title} location={lodgingData.location} />
                        <Tag tags={lodgingData.tags} />
                    </div>
                    <div className='block_ratingAndHost'>
                        <Host name={lodgingData.host.name} picture={lodgingData.host.picture} />
                        <Rating rating={parseInt(lodgingData.rating)} />
                    </div>
                </div>
                <div className='collapseLodging'>
                    <Collapse title='Description'>
                        <p>{lodgingData.description}</p>
                    </Collapse>
                    <Collapse title='Équipements'>
                        <ul>
                            {lodgingData.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>

            </section>
        );
    } else {
        return null;
    }
}
export default Lodging;