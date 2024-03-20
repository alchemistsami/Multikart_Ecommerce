import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import "../../../../../Assets/CSS/NavbarSecond.css";

import headerLogoPng from "../../../../../Assets/Image/logo-header.png";
import Home from "./Nav-Components/Home";
import Shop from "./Nav-Components/Shop";
import Products from "./Nav-Components/Products";
import Features from "./Nav-Components/Features";
import Pages from "./Nav-Components/Pages";
import Blogs from "./Nav-Components/Blogs";
import SeachIcon from "./Nav-Components/SeachIcon";
import Settings from "./Nav-Components/Settings";
import AddToCard from "./Nav-Components/AddToCard";

export default function NavbarSecond() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });

  return (
    <div  className="navbar-draver-home-page">
      <div id='navbar_top' className="navbar-position-steaky navbar-draver-home-page-dropdown">
        <svg
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "38px", cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <img src={headerLogoPng} alt="" />
        <div id="all-items-navbar-draver-home-page">
          <Home />
          <Shop />
          <Products />
          <Features />
          <Pages />
          <Blogs />
          <SeachIcon />
          <Settings />
          <AddToCard />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BACK</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
