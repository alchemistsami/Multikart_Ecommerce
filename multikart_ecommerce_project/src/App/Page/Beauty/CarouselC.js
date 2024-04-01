
import React from "react";
import { Carousel } from "react-bootstrap";
import '../../../Assets/CSS/beautyCarousel.css'

const CarouselC = ({ carouselData }) => {
  return (
    <section className="p-0">
      <Carousel>
        {carouselData &&
          carouselData.map((carouselItem, index) => (
            <Carousel.Item key={index}>
              <img 
               
                width={"500px"}
                src={carouselItem.img}
                alt="Carousel slide"
              />
              <Carousel.Caption className="text-left"> 
                <div className="home home1">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="slider-contain">
                          <div className="div-align-text">
                            <h5 className="h5-text">{carouselItem.title1}</h5>
                            <h1 className="h2-text">{carouselItem.title2}</h1>
                            <a
                              className="a-hover a-button"
                              href="/left-sidebar/collection"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </section>
  );
};

export default CarouselC;

