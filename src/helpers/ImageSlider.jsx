import { useState, useEffect, useRef, useCallback } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import './imageSlider.css';

const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
};

const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.5s",
  };

export default function ImageSlider ({ slides, parentWidth }) {

    const timerRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const getSlideStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        backgroundImage: `url(${slides[slideIndex].image})`,
        width: `${parentWidth}px`,
    });
    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
      });

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext()
        }, 12000);
        return () => clearTimeout(timerRef.current);
    }, [goToNext])

    return (
        <>
        <div>
            <div className='leftArrow' onClick={goToPrevious}>
                <ArrowBackIosIcon className='arrowIcon'/>
            </div>
            <div className='rightArrow' onClick={goToNext}>
                <ArrowForwardIosIcon className='arrowIcon'/>
            </div>
        </div>
        <div className='sliderStyle'>
            <div className='slidesOverflow'>
                <div style={getSlidesContainerStylesWithWidth()} >
                    {slides.map((_, slideIndex) => (
                        <div className='visibleSlideContainer'>
                            <div className='carouselTopContainer'>
                                <h5 className='projTitle'>{slides[slideIndex].name}</h5>
                                <p className='projectSkills'>{slides[slideIndex].skills}</p>
                                <div className='project-btn-wrap'>
                                    <button className='project-btn' onClick={() => window.open(slides[slideIndex].git)}>
                                        GitHub</button>
                                    <button className='project-btn' onClick={() => window.open(slides[slideIndex].site)}>
                                        Site</button>
                                </div>
                            </div>
                            <div key={slideIndex} style={getSlideStylesWithBackground(slideIndex)} className='projImage'>
                                <div className='overlay'>
                                    <p className='projDesc'>{slides[slideIndex].desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='dotsContainer'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='dots'>
                        <TripOriginIcon />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
    