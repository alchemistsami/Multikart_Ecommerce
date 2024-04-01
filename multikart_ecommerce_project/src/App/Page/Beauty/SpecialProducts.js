import React, { useState } from "react";
import "../../../Assets/CSS/beauty-page.css";
import { specialProducts } from "./BeautyPage_data";

const SpecialProducts = () => {
  const [startIdx, setStartIdx] = useState(0);

  const handleNext = () => {
    if (startIdx + 1 <= specialProducts.length - 3) {
      setStartIdx(startIdx + 1);
    } else {
      setStartIdx(0);
    }
  };

  const handlePrev = () => {
    if (startIdx - 1 >= 0) {
      setStartIdx(startIdx - 1);
    } else {
      setStartIdx(specialProducts.length - 3);
    }
  };

  return (
    <div>
      <div className="text-center middle-div">
        <p>Special Offer</p>
        <h2>TOP COLLECTIONS</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {specialProducts
            .slice(startIdx, startIdx + 3)
            .map((product, index) => (
              <div
                className="col-md-4 mb-3" // Use col-md-4 for three products inline
                key={index}
                style={{ margin: "0 auto" }}
              >
                <div className="card border-0">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="card-body text-center">
                    <h5 style={{color: ' rgb(249, 114, 65)'}}>{product.date}</h5>
                    <h5 className="card-title special-title ">{product.title}</h5>
                    <span className="card-text">
                      <p>{product.text}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-4 mb-4">
          <button className="btn btn-primary m-2" onClick={handlePrev}>
            Previous
          </button>
          <button className="btn btn-primary m-2" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
