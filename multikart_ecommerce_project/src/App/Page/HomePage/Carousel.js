import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../../Assets/CSS/Carousel.css"


const CarouselComponent = ({slide}) => {
  return (
    <section className="p-0">
      <Carousel>
      {slide && (slide.map((slide)=><Carousel.Item>
          <img
            className="d-block w-100"
            src={slide.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="home home1 text-center">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="slider-contain">
                      <div className="div-aline-text">
                        <h5 className="h5-text">{slide.h5text}</h5>
                        <h1 className="h2-text">{slide.h1text}</h1>
                        <a className="a-hover a-button" href="/left-sidebar/collection">Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>))}
        
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide[1].img}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="home home2 text-center">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="slider-contain">
                      <div className="div-aline-text">
                        <h5 className="h5-text">{slide[1].h5text}</h5>
                        <h1 className="h2-text">{slide[1].h1text}</h1>
                        <a className="a-hover a-button" href="/left-sidebar/collection">Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </section>
  );
}
export default CarouselComponent;