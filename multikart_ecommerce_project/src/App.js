import { Carousel } from 'react-bootstrap';
import './App.css';

import FashionInsta from './App/Page/HomePage/Instagram/FashionInsta';
import Service1 from './App/Page/HomePage/Services/Service1';
import LogoBlock from './App/Page/HomePage/logo-block';
import {  instagram,   logoImage } from './App/Page/HomePage/dada_InstaPage';
import CarouselComponent from './App/Page/HomePage/Carousel';
import Poster from './App/Page/HomePage/Poster';
// import Footer from './App/Constant/Footer/Footer';

// import Footer from './App/Constant/Footer/Footer';
import HeaderHomePage from './App/Constant/Header/Header-Home-Page/HeaderHomePage';
import SliderComponent from './App/Page/HomePage/SpecilaOffers/ReactState';
import CarouselComponent from './App/Page/HomePage/Carousel';
import Home from './App/Constant/Header/Header-Home-Page/Navbar-Second/Nav-Components/Home';
import HomePage from './App/Page/HomePage/HomePageMain/HomePage';


function App() {
 

  return (

    <div className="App">
    <CarouselComponent/>
    <Poster/>
    <Service1/> 
    <FashionInsta instagram={instagram}/>
    <LogoBlock logoImage={logoImage}/> 
    {/* <Footer/> */}
    </div>

 <HomePage/>

  );
}

export default App;
