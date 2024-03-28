// <<<<<<< HEAD
// import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
// import Footer from './App/Constant/Footer/Footer'

import BeautyHome from './App/Page/Beauty/BeautyHome'
import HomePage from './App/Page/HomePage/HomePageMain/HomePage'
// =======
// //import { Carousel } from 'react-bootstrap';
// import './App.css';
import Footer from './App/Constant/Footer/Footer';
// //import HeaderHomePage from './App/Constant/Header/Header-Home-Page/HeaderHomePage';
// //import SliderComponent from './App/Page/HomePage/SpecilaOffers/ReactState';
// //import CarouselComponent from './App/Page/HomePage/Carousel';
// //import Home from './App/Constant/Header/Header-Home-Page/Navbar-Second/Nav-Components/Home';
// import HomePage from './App/Page/HomePage/HomePageMain/HomePage';
// import FashionInsta from './App/Page/HomePage/Instagram/FashionInsta';
// import Service1 from './App/Page/HomePage/Services/Service1';
// import LogoBlock from './App/Page/HomePage/logo-block';
// import {  instagram,   logoImage } from './App/Page/HomePage/dada_InstaPage';
// function App() {

// >>>>>>> 199be3b68d1dd8f0684470a8f38fe048037588f1

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//       <Route path='/' element={<HomePage/>}  />
//         <Route path='/footer' element={<Footer/>}  />

//         <Route path='/beauty' element={<BeautyHome/>}  />
//       </Routes>

//       </BrowserRouter>

//     </div>
//   )
//  <HomePage/>
//  <Service1/>
//     <FashionInsta instagram={instagram}/>
//     <LogoBlock logoImage={logoImage}/>
//  </div>
//   );
// }

// export default App

import React from "react";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/beauty" element={<BeautyHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
