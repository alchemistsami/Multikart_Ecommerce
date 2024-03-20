import logo from './logo.svg';
import './App.css';
import FashionInsta from './App/Page/HomePage/Instagram/FashionInsta';
import Service1 from './App/Page/HomePage/Services/Service1';
import LogoBlock from './App/Page/HomePage/logo-block';
import {  instagram,   logoImage } from './App/Page/HomePage/dada_InstaPage';
import CarouselComponent from './App/Page/HomePage/Carousel';
import Poster from './App/Page/HomePage/Poster';
// import Footer from './App/Constant/Footer/Footer';

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
  );
}

export default App;
