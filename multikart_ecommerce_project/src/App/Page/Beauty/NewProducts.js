import React , {useState}from 'react' ;
import { Rating } from "@mui/material";
import { beautyProducts } from "./BeautyPage_data";

const NewProducts = () => {
    const [startIdx, setStartIdx] = useState(0);
    const [value, setValue] = useState(4);
  
    const handleNext = () => {
      if (startIdx + 1 <= beautyProducts.length - 5) {
        setStartIdx(startIdx + 1);
      } else {
        setStartIdx(0);
      }
    };
  
    const handlePrev = () => {
      if (startIdx - 1 >= 0) {
        setStartIdx(startIdx - 1);
      } else {
        setStartIdx(beautyProducts.length - 5);
      }
    };
  return (
    <div>
      <div className="container">
      
        <div className="row align-items-center">
          {beautyProducts
            .slice(startIdx, startIdx + 5)
            .map((product, index) => (
              <div
                className="col-md-2 m-3"
                key={index}
                style={{ marginRight: index !== 4 ? "15px" : "0" }}
              >
                <div className="card border-0">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ width: "260px", height: "auto" }}
                  />
                  <div className="card-body">
                    <Rating name="read-only" value={value} readOnly />
                    <h5 className="card-title">{product.title}</h5>
                    <span className="card-text">
                      <span>{product.prize}</span>
                      {product.removedPrize && (
                        <span>
                          <s>{product.removedPrize}</s>
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary m-2" onClick={handlePrev}>
            Previous
          </button>
          <button className="btn btn-primary m-2" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewProducts
