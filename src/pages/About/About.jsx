import './About.scss';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutImage from '../../assets/photo-about.png';
import aboutSections from './AboutSections';

export default function About() {

    return (
        <>
            <Banner bannerImage={AboutImage} bannerTitle="" />
            <section className='collapse-container'>
                {/* Parcourir le tableau 'sections' et rendre un composant Collapse pour chaque section */}
                {aboutSections.map((section, index) => (
                    <Collapse key={index} title={section.title}>
                        <p>{section.content}</p>
                    </Collapse>
                ))}
            </section>
        </>
    );
}

