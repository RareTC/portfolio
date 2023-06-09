import React from 'react';
import { useState, useEffect } from 'react';
import './Projects.css';
import ImageCard from '../../helpers/ImageCard';
import ImageSlider from '../../helpers/ImageSlider'
import Makeme from '../../assets/makeme.png';
import MockupMagic from '../../assets/mockupMagic.png';
import Marketsense from '../../assets/marketsense.png';
import Concentration from '../../assets/concentration.png';

  
const projects = [
   {
       name: 'Mockup Magic',
       image: MockupMagic,
       skills: 'MongoDB, Express, ReactJS, NodeJS, HTML, CSS',
       desc: 'A MERN stack app, which auto-generates palettes based off a highly interactive palette pad and applies them to mockup sites. Go on, give the palette a test, click around!',
       git: 'https://github.com/RareTC/mockup-magic#readme',
       site: 'https://mockup-magic.herokuapp.com/',
   },
   {
       name: 'MAKEME.md',
       image: Makeme,
       skills: 'ReactJS, NodeJS, MongoDB, Express, HTML, CSS',
       desc: `Modeled after Github's README.md, this allows live side by side viewing of markdown to readme. With easy to add templates, and components build a beautiful README in no time!`,
       git: 'https://github.com/RareTC/makeme/tree/main#readme',
       site: 'https://makeme.herokuapp.com/',
   },
   {
       name: 'Market Sense',
       image: Marketsense,
       skills: 'Javascript, Express, NodeJS, MongoDB, HTML, CSS',
       desc: 'Gain an outlook and sense of community with Market Sense, an application where you can look up the latest stock information/news from an API, and create user centric posts of your perspective. ',
       git: 'https://github.com/RareTC/Market-Sense/blob/main/README.md',
       site: 'https://market-sense.herokuapp.com/',
   },
   {
       name: 'Concentration - ATLA',
       image: Concentration,
       skills: 'Javascript, HTML, CSS',
       desc: 'A classic game of Concentration with fun sound bites and unique themed cards based off the universally acclaimed hit show, Avatar The Last Airbender!',
       git: 'https://github.com/RareTC/Concentration-Game-/blob/main/README.md',
       site: 'https://raretc.github.io/Concentration-Game-/',
   },

]

export default function Projects() {
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1010);
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <ImageCard cards={projects} />
      )
        : (
          <div className='carouselList'>
            <h1>My Projects - Hover To Learn More</h1>
            <div className='containerStyle'>
              <ImageSlider slides={projects} parentWidth={900} />
            </div>
          </div>
        )}
    </>
  );
}