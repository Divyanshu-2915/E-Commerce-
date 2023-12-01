import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Home.css';

const Carousel = () => {
  return ( 
    <CarouselProvider
      naturalSlideWidth={90}
      naturalSlideHeight={35}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0} className='slider-slide'><img src='./IMAGES/head1.jpg' className='slider-image'/></Slide>
        <Slide index={1} className='slider-slide'><img src='./IMAGES/head2.jpg' className='slider-image'/></Slide>
        <Slide index={2} className='slider-slide'><img src='./IMAGES/head3.jpg' className='slider-image'/></Slide>
      </Slider>
      <ButtonBack id='slider-btn1'>&#8249;</ButtonBack>
      <ButtonNext id='slider-btn2'>&#8250;</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;