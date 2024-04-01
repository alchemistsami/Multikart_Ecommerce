import React from 'react'
import CarouselComponent from '../Carousel' ;
import Footer from "../../../Constant/Footer/Footer.js"
import Poster from '../Poster'
import { slide } from './data_HomePage'
import { poster } from './data_HomePage'

import SpecialOfferBg from '../SpecialOfferBg'
import { bgimg } from './data_HomePage'
import SpecialProduct from '../Special_Product/SpecialProduct'



function HomePage() {
   
  return (
    <div> 
        <div className="App">
          <CarouselComponent slide={slide} />
          <Poster poster={poster} />
          <SpecialProduct/>
          <SpecialOfferBg  bgimg={bgimg}/>
          <Footer />
        </div>
      </div>
  )
}

export default HomePage