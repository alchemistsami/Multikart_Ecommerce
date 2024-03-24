import React from "react";
import "../../../Assets/CSS/SpecialOffer.css";

const SpecialOfferBg = ({ bgimg }) => {
  return (
    <div>
      {bgimg.map((bgimg)=>(
           <div
           className="container-fluid s_bg-img"
           style={{ backgroundImage: `url(${bgimg.img})` }}
         >
           <div className="row">
             <div className="col-lg">
               <div className=" col-lg-6 text-center">
                 <h2 className="s_banner1">{bgimg.bg1}</h2>
                 <h3 className="s_banner2">{bgimg.bg2}</h3>
                 <h4 className="s_banner3">{bgimg.bg3}</h4>
               </div>
             </div>
           </div>
         </div>
      ))}
     
    </div>
  );
};

export default SpecialOfferBg;
