    import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../../../Assets/CSS/SpecialProducts.css'
import { Data } from './Data';

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Change this to 3 or 4
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // dots: true, // Add this to display dots
    arrows: false, // Add this to hide arrows
  };

let Images = Data;

  return (
    <>
      <h5 style={{color:'red'}} >Our Collection</h5>
      <h2>SPECIAL PRODUCTS</h2>
      <div className='slider-buttom-border-top' ></div>
      <div className='sliderbox'>
        <Slider {...settings}>
          {Images.map((image, index) => (
            <div className='Shpecial-Products-list' key={index}>
              <img src={image.url} className='SliderImagesSetHomePage' alt={`img ${index + 1}`} />
              <h5 style={{color:'red'}} >{image.date}</h5>
              <h5>{image.cardData1}</h5>
              <h5>{image.cardData2}</h5>
              <div className='slider-buttom-border' ></div>
              <h6>{image.comment}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;

    