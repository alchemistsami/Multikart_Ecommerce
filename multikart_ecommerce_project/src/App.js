import logo from './logo.svg';
import './App.css';
import CarouselComponent from './App/Page/HomePage/Carousel';
import Poster from './App/Page/HomePage/Poster';
import Footer from './App/Constant/Footer/Footer';

function App() {
  return (
    <div className="App">
    <CarouselComponent/>
    <Poster/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
