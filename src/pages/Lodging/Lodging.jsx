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
    const { id } = useParams(); // Extraire le paramètre 'id' de l'URL en utilisant le hook useParams

    // Le hook useNavigate vous permet de naviguer de manière programmatique vers différentes routes dans votre application
    const navigate = useNavigate();
    const [lodgingData, setLodgingData] = useState();

    useEffect(() => {
        // Trouver les données lodgingItems qui correspondent à l'identifiant 'id'
        const lodgingItems = data.find((item) => item.id === id);
        if (!lodgingItems) {

            // Si les données lodgingItems ne sont pas trouvées, naviguer vers la page d'erreur
            navigate('*');
        } else {
            setLodgingData(lodgingItems)
        }
    }, [lodgingData, navigate, id]);

    if (lodgingData) {
        return (

            <>
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

            </>
        );
    }
}
export default Lodging;