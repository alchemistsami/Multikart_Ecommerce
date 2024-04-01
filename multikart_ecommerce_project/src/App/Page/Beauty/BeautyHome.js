import React from "react";
import "../../../Assets/CSS/beauty-page.css";
import About from "./About";
import TopCollections from "./TopCollections";
import SpecialProducts from "./SpecialProducts";
import NewProducts from "./NewProducts";
import Footer from "../../Constant/Footer/Footer";
import CarouselC from "./CarouselC";
import { carouselData } from "./BeautyPage_data";
import ProductTutorial from "./ProductTutorial";

const BeautyHome = () => {
  return (
    <div>
      {/* <CarouselC carouselData={carouselData} /> */}
      <About />
      <NewProducts />
      <ProductTutorial/>
      <TopCollections />
      <SpecialProducts />
      <Footer />
    </div>
  );
};

export default BeautyHome;
