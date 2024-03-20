import React, { useRef, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';

import '../../../../../Assets/CSS/NavbarFirst.css'

export default function NavbarFirst() {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    // Open the dropdown when the mouse enters the button
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Close the dropdown when the mouse leaves the dropdown area
    setIsDropdownOpen(false);
  };

  const handleMouseMove = (event) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      // Close the dropdown if the mouse moves outside of the dropdown component
      setIsDropdownOpen(true);
    }
  };
  return (
    <div className='Navbar-first' >
      <Navbar>
        <Navbar.Brand className='nav-bar-title' style={{marginLeft:'70px'}} >Welcome to Our store Multikart</Navbar.Brand>
        <Navbar.Brand className='nav-bar-title' style={{marginLeft:'30px'}} >Call Us: 123 - 456 - 7890</Navbar.Brand>
        <Navbar.Brand className='nav-bar-title' style={{marginLeft:'710px'}}>
          <span  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16" style={{ marginRight: '8px', marginBottom: '5px' }} >
            <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
          </svg></span>
          Wishlist</Navbar.Brand>
        <Navbar.Brand className='nav-bar-title' id='nav-bar-title-id'
          ref={dropdownRef}
          onMouseMove={handleMouseMove}
          style={{ position: "relative", marginLeft:'5px'}}
        >
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" style={{ marginRight: '8px', marginBottom: '5px' }} >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            My Account
          </p>
          {isDropdownOpen && (
            <ul
              id='dropdown-menu-id'
              style={{
                position: "absolute",
                zIndex: 1,
                listStyle: 'none'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li className='nav-bar-dropdown' >Login</li>
              <li className='nav-bar-dropdown' >Register</li>
              <li className='nav-bar-dropdown' >Logout</li>
            </ul>


          )}
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}
