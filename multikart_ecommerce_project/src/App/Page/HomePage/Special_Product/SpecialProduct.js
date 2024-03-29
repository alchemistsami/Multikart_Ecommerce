import React, { useState } from 'react'
import './SpecialProduct.css'
import { SpecialProductImage1, SpecialProductImage2 } from '../../../../API/SpecialProductApi'
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import { SpecialProductImageSlider1 } from '../../../../API/SpecialProductApi';

const SpecialProduct = () => {

  const [istrue, setIstrue] = useState(true)
  const [selctedItemId, setSelctedItemId] = useState('')

  const handleFalse = (e) => {
    setIstrue(false)
    setSelctedItemId(e.target.alt)
  }

  const handleTrue = () => {
    setIstrue(true)
  }

  const handleover=()=>{
    alert("hello")
  }

  return (
    <div>
      <div className='container-fluid SB-SpecialProduct'>
        <h4 className="text-danger">Exclusive Products</h4>
        <h1>SPECIAL PRODUCTS</h1>

        <div className='d-flex justify-content-center align-items-center'>
          <div className='p-2'>NEW ARRIVAL</div>
          <div className='p-2'>FEATURED</div>
          <div className='p-2'>SPECIAL</div>
        </div>
      </div>


      {/* Work Pending */}
      {/* <div className='SB-Slider-1'>
       {SpecialProductImageSlider1.map((item)=>
            <div className='SB-Image-Slider-1 p-2' >
              <img className='sb'  src={item.img} alt={item.id}/>
            </div>)
       }
      </div> */}


      <div className='container-fluid SB_Special_Product_Image'>{
        istrue ? SpecialProductImage1.map((item, index) => (

          <img onMouseOver={(e) => handleFalse(e)} className='col-md-3 p-2' src={item.img} alt={item.id} key={index} />))
          :
          SpecialProductImage1.map((item, index) => (
            item.id == selctedItemId ?
              <span className='img'>
                <img onMouseLeave={handleTrue} className='col-md-3 p-2 img2' src={item.img2} alt={item.id} key={index} />

                <span className='SB-Icons-1'>
                  <ShoppingCartIcon className='SB-ShoppingCartIcon m-2' />
                  <FavoriteIcon className='SB-FavoriteIcon m-2' />
                  <SearchIcon className='SB-SearchIcon m-2' />
                  <CachedIcon className='SB-CachedIcon m-2' />
                </span>

              </span>
              :

              <img onMouseLeave={handleTrue} className='col-md-3 p-2' src={item.img} alt={item.id} key={index} />


          ))
      }

      </div>


      <div className='container-fluid d-flex SB_Special_Product_Icon'>{
        SpecialProductImage1.map((item, index) => (
          <div className='col-md-3' key={index}>
            <div className='SB-FiveStar'>
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#DDDDDD' }} />
            </div>

            <p className='col-md-4 '>{item.title}</p>

            <div className='col-md-3'>
              <span className='col-md-3 '>{item.price}</span>
              <span className='p-2 SB-Original_Price' key={index}><del>{item.original_price}</del></span>
            </div>

            <div className='col-md-3'>
              {item.circle_count.map((item, index) => {
                return <CircleIcon onClick={handleover} className='col-md-3' style={{ color: item }} key={index}/>
              })}

            </div>
          </div>
        ))}
      </div>


      <div className='container-fluid SB_Special_Product_Image'>{

        istrue ? SpecialProductImage2.map((item, index) => (
          <img onMouseOver={(e) => handleFalse(e)} className='col-md-3 p-2' src={item.img} alt={item.id} key={index} />
        ))
          : SpecialProductImage2.map((item, index) => (
            item.id == selctedItemId ?

            <span className='img'>

              <img onMouseLeave={handleTrue} className='col-md-3 p-2' src={item.img2} alt={item.id} key={index} />

              <span className='SB-Icons-1'>
                  <ShoppingCartIcon className='SB-ShoppingCartIcon m-2' />
                  <FavoriteIcon className='SB-FavoriteIcon m-2' />
                  <SearchIcon className='SB-SearchIcon m-2' />
                  <CachedIcon className='SB-CachedIcon m-2' />
                </span>
            </span>
              
              :
              <img onMouseLeave={handleTrue} className='col-md-3 p-2' src={item.img} alt={item.id} key={index} />

          ))}
      </div>

      <div className='container-fluid d-flex SB_Special_Product_Icon'>{
        SpecialProductImage2.map((item, index) => (
          <div className='col-md-3' key={index}>
            <div className='SB-FiveStar'>
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#ffa200' }} />
              <StarIcon style={{ color: '#DDDDDD' }} />
            </div>
            
            <p className='col-md-4 '>{item.title}</p>
            
            <div className='col-md-3'>
              <span className='col-md-3 '>{item.price}</span>
              <span className='p-2 SB-Original_Price'><del>{item.original_price}</del></span>
            </div>

            <div className='col-md-3'>
              {item.circle_count.map((item, index) => {
                return <CircleIcon className='col-md-3' style={{ color: item }} />
              })}

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialProduct