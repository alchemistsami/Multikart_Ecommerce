import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Footer from './App/Constant/Footer/Footer'

import About from './App/Page/Beauty/About'
import BeautyHome from './App/Page/Beauty/BeautyHome'
import HomePage from './App/Page/HomePage/HomePageMain/HomePage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}  />
        <Route path='/footer' element={<Footer/>}  />
        
        <Route path='/beauty' element={<BeautyHome/>}  />
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
