import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../../Assets/CSS/Instagram.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { Container, Row, Col } from 'reactstrap';
import { SliderInsta } from '../../../../Assets/Slider/InstaSlider';
import Finsta1 from '../../../../Assets/Image/Fashion/Finsta1.png';
import Finsta2 from '../../../../Assets/Image/Fashion/Finsta2.png';
 import Finsta3 from '../../../../Assets/Image/Fashion/Finsta3.png';
import Finsta4 from '../../../../Assets/Image/Fashion/Finsta4.png';
import Finsta5 from '../../../../Assets/Image/Fashion/Finsta5.png';
import Finsta6 from '../../../../Assets/Image/Fashion/Finsta6.png';
import Finsta7 from '../../../../Assets/Image/Fashion/Finsta7.png';
import Finsta8 from '../../../../Assets/Image/Fashion/Finsta8.png';


 
const FashionInsta= ()=> {

 
   return(
     <Container>
      <Row>
        <Col md='12'>
        
            <div className="heading">
            <h2># INSTAGRAM</h2>
            </div>
           
           <div className="slide-container">
           <Slider {...SliderInsta} >
              <div className="insta-container">
              <img src={Finsta1} alt="img" className="insta-image"/>
              {/* {imgData.map((image,index)=>(
                 
                <div key={index} className="image-wrapper">
                <img src={image.image} alt={`Image ${index}`} className="insta-image"/>  */}
              
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
             </div>
         
               
            <div className="insta-container">
                <img src={Finsta2} alt="img" className="insta-image"/>
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              </div> 
              <div className="insta-container">
                <img src={Finsta3} alt="img" className="insta-image"/>
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              </div>
              <div className="insta-container">
                <img src={Finsta4} alt="img" className="insta-image"/>
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              
              </div>
              <div className="insta-container">
                <img src={Finsta5} alt="img" className="insta-image"/>
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              </div>
              <div className="insta-container">
                <img src={Finsta6} alt="img" className="insta-image"/>
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              </div>
              <div className="insta-container">
                <img src={Finsta7} alt="img" className="insta-image" />
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              </div>
              <div className="insta-container">
                <img src={Finsta8} alt="img" className="insta-image"/>
                <div className="instagram-overlay">
                <div className="content">
                <p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                </p>
                </div>
              </div>
              </div>
              
</Slider>
              
            
           </div>
            
        
        </Col>
      </Row>
     </Container>
        
     
        
    );
    
 };
 export default FashionInsta;