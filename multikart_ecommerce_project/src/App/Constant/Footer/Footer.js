import React from "react";
import multicartLogo from "../../../Assets/Image/multicart-logo.png";
import visaLogo from "../../../Assets/Image/visa-logo.png"
import paypalLogo from "../../../Assets/Image/paypal-logo.png"
import americanLogo from "../../../Assets/Image/american-express-logo.png"
import masterCardLogo from "../../../Assets/Image/mastercard-logo.png"
import discoverLogo from  "../../../Assets/Image/discover-logo.png"
import '../../../Assets/CSS/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-div1">
            <span className="footer-text">
              <h4>KNOW IT ALL FIRST! </h4>
              <p>
                Never Miss Anything From Multikart By Signing Up To Our
                Newsletter.
              </p>
            </span>
            <span className="middle-line"></span>
            <span>
              <div className="input-group mb-3">
                <input
                  className="form-control text-input"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
                <button className="subscribe-btn">SUBSCRIBE</button>
              </div>
            </span>
          </div>
          <div className="container footer-container2">
            <div className="row ">
              <div className="col first-col">
                <img src={multicartLogo} height={30} />
                <span className="footer-para">
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </span>
                <div className="footer-icons">
                  <span>
                    <Link to="https://www.facebook.com" target="_blank">
                      <i className="bi bi-facebook fb-logo"> </i>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                      target="_blank"
                    >
                      <i className="bi bi-google"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://twitter.com/" target="_blank">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://rss.com/" target="_blank">
                      <i className="bi bi-wifi"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <div className="col ps-5">
                <h4 className="headings">MY ACCOUNT</h4>
                <ul className="underline">
                  <li>Womens</li>
                  <li>Clothing</li>
                  <li>Accessories</li>
                  <li>Featured</li>
                </ul>
              </div>

              <div className="col  ps-5">
                <h4 className="headings "> WHY WE CHOOSE </h4>
                <ul className="underline">
                  <li> Shipping & Return </li>
                  <li> Secure Shopping </li>
                  <li> Gallary </li>
                  <li> Affiliates </li>
                  <li> Contacts </li>
                </ul>
              </div>

              <div className="col  ps-5">
                <h4 className="headings"> STORE INFORMATION </h4>
                <ul>
                  <li>
                    <i className="bi bi-geo-alt me-3"></i>
                    Multikart Demo Store, Demo Store India 345-659
                  </li>
                  <li>
                    <i className="bi bi-telephone me-3"></i>
                    Call Us: 123-456-7898
                  </li>
                  <li>
                    <i className="bi bi-envelope me-3"></i>
                    Email Us: Support@Fiot.Com
                  </li>
                  <li>
                    <i className="bi bi-printer me-3"></i>
                    Fax: 123456
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="last-div">
          <div className="ms-5 ps-5">
            <span>
              <p> &copy; 2023-24 themeforest powered by pixelstrap </p>
            </span>
          </div>

          <div className="footer-logos ms-3">
            <div>
              <img src={visaLogo} className="pe-3" />
            </div>
            <div>
              <img src={masterCardLogo} className="pe-3" />
            </div>
            <div>
              <img src={paypalLogo} className="pe-3" />
            </div>
            <div>
              <img src={americanLogo} className="pe-3" />
            </div>
            <div>
              <img src={discoverLogo} className="pe-3" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
