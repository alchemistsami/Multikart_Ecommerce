import React from 'react';
import '../../../Assets/CSS/logo.css';
import Slider from 'react-slick';
import { LogoSlider } from '../../../Assets/Slider/ScriptSlider';
import { Container, Row, Col } from 'reactstrap';
import Logo1 from '../../../Assets/Logo/logo1.png'
import Logo2 from '../../../Assets/Logo/logo2.png';
import Logo3 from '../../../Assets/Logo/logo3.png';
import Logo4 from '../../../Assets/Logo/logo4.png';
import Logo5 from '../../../Assets/Logo/logo5.png';
import Logo6 from '../../../Assets/Logo/logo6.png';
import Logo7 from '../../../Assets/Logo/logo7.png';
import Logo8 from '../../../Assets/Logo/logo8.png';


function LogoBlock() {
return (
    <section>
      <Container>
        <Row>
          <Col md="12">
            <Slider {...LogoSlider} className='slide-6 no-arrow'>
              <div className="logo-container">
                <img src={Logo1} alt="image" className="logo-img"/>
              </div>
              <div className="logo-container">
                <img src={Logo2} alt="image" className="logo-img"/>
              </div>
              <div className="logo-container">
                <img src={Logo3} alt="image" className="logo-img"/>
              </div>
              <div className="logo-container">
                <img src={Logo4} alt="image" className="logo-img"/>
              </div>
              <div className="logo-container">
                <img src={Logo5} alt="image" className="logo-img"/>
              </div>
              <div className="logo-container">
                <img src={Logo6} alt="image" className="logo-img"/>
              </div>
              <div className="logo-container">
                <img src={Logo7} alt="image" className="logo-img" />
              </div>
              <div className="logo-container">
                <img src={Logo8} alt="image" className="logo-img" />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default LogoBlock;