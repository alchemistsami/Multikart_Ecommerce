import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import '../../../../Assets/CSS/Kids.css';


const KidsInsta=({kidsImages})=>{
    return(
        <section >
        <Container >
          <Row>
            <Col md="12">
        <div className='heading'>
            <h2># INSTAGRAM</h2>
        </div>
        <div className="image-container">
            {kidsImages.map((image,index)=>(
                <div key={index} className="image-wrapper">
                       <img src={image} alt={`Image ${index}`} className="insta-image "/>
                <div className="instagram-overlay">
                   <div className="content">
                    <p>
                       <a href=" "><FontAwesomeIcon icon={faInstagram} className="insta-icon" /></a>
                    </p>
                   </div>
                </div>
            </div>
            
            ))}
            </div>
        
        </Col>
        </Row>
      </Container>
    </section>
    );
}
export default KidsInsta;
