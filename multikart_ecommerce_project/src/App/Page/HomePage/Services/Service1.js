import React from 'react';
import '../../../../Assets/CSS/Service-sript.css';
import Shipping from '../../../../Assets/Image/Service/Shipping.png';
import Service from '../../../../Assets/Image/Service/Service.png';
import Festival from '../../../../Assets/Image/Service/Festival.png';

function Service1() {
    
    return (

        <div class="container">
            <div class="row ">
                <div class="col">
                    <div class="media border-end" >
                        <div class="logoimage">
                            <img src={Shipping} alt='image' />
                        </div>
                        <div class="media-body">
                            <h4 >FREE SHIPPING</h4>
                            <p >Free Shipping World Wide</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="media border-end" >
                        <div class="logoimage">
                            <img src={Service} alt='image' />
                        </div>
                        <div class="media-body">
                            <h4 
                             >
                                24 x 7 SERVICE</h4>
                            <p >Online Service For 24 x 7</p>

                        </div>

                    </div>
                </div>
                <div class="col">
                <div class="media ">
                        <div class="logoimage" >
                            <img src={Festival} alt='image' />
                        </div>
                        <div class="media-body">
                            <h4  
                            //  onMouseEnter={(e) => e.target.style.color = '#FF4C3B'}
                            //     onMouseLeave={(e) => e.target.style.color = '#212529'}

                            >FESTIVAL OFFER</h4>
                            <p > New Online Special Festival Offer</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1
