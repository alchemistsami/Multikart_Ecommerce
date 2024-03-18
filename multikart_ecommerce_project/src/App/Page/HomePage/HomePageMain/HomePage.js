import React from 'react'
import CarouselComponent from '../Carousel'
import Poster from '../Poster'
import { slide } from './data_HomePage'
import { poster } from './data_HomePage'
function HomePage() {
   
  return (
    <div> 
        <div className="App">
          <CarouselComponent slide={slide} />
          <Poster poster={poster} />
        </div>
      </div>
  )
}

export default HomePage