import React from 'react';
import '../../../Assets/CSS/logo.css';
import Slider from 'react-slick';
import { LogoSlider } from '../../../Assets/Slider/ScriptSlider';
import { Container, Row, Col } from 'reactstrap';


function LogoBlock({ logoImage }) {
  return (
    <section>
      <Container>
        <Row>
          <Col md="12">
            <Slider {...LogoSlider} className='slide-6 no-arrow'>
              {logoImage.map((image, index) => (
                <div key={index} className="logo-container">
                  <img src={image} alt={`Image ${index}`} className="logo-img" />
                </div>
              ))}
              </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default LogoBlock;