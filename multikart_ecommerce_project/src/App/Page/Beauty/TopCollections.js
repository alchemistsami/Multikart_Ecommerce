import React from 'react' ;
import "../../../Assets/CSS/beauty-page.css";
import BeautyProducts from './NewProducts';

const TopCollections = () => {
  return (
    <div>
       <div className="text-center middle-div mt-5">
        <p> Special Offer</p>
        <h2>TOP COLLECTIONS</h2>
      </div>
      <BeautyProducts/>
    </div>
  )
}

export default TopCollections
