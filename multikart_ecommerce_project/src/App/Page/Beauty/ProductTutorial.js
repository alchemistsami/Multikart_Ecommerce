import React from 'react' 
import productTut from '../../../Assets/Image/productTut.jpg'

const ProductTutorial = () => {
  return (
    <div>
       <div className="text-center middle-div">
        <p>Special Offer</p>
        <h2>PRODUCT TUTORIAL</h2>
      </div>
      <div class=' video-section-container mt-4'>
    <img src={productTut} className='video-section' />
</div>

    </div>
  )
}

export default ProductTutorial
