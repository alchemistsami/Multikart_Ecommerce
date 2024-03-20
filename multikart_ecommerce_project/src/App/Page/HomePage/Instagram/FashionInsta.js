import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../../Assets/CSS/Instagram.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { Container, Row, Col } from 'reactstrap';
import { SliderInsta } from '../../../../Assets/Slider/InstaSlider';



const FashionInsta= ({instagram})=> {

 
  return(
    <Container>
     <Row>
       <Col md='12'>
       
           <div className="heading">
           <h2># INSTAGRAM</h2>
           </div>
          
           <div className="slide-container">
             <Slider {...SliderInsta}>
               {instagram.map((img, index) => (
                 <div key={index} className="insta-container">
                   <img src={img.img} alt={`Image ${index}`} className="insta-image"/>  
                   <div className="instagram-overlay">
                     <div className="content">
                       <p>
                         <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
             </Slider>
           </div>
           </Col>
     </Row>
    </Container>
     );
   
    };
    export default FashionInsta; 
              
    
       
  
      