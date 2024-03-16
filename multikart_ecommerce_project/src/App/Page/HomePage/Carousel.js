import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../../Assets/CSS/Carousel.css"

const CarouselComponent = () => {
  return (
    <section className="p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner1.5d5f9c6f.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="home home1 text-center">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="slider-contain">
                      <div className="div-aline-text">
                        <h5 className="h5-text">welcome to fashion</h5>
                        <h1 className="h2-text">MEN FASION</h1>
                        <a className="a-hover a-button" href="/left-sidebar/collection">Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner2.3b2448f3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="home home2 text-center">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="slider-contain">
                      <div className="div-aline-text">
                        <h5 className="h5-text">welcome to fashion</h5>
                        <h1 className="h2-text">WOMEN FASION</h1>
                        <a className="a-hover a-button" href="/left-sidebar/collection">Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default CarouselComponent;