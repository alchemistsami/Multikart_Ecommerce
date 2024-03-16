import { useState, useRef } from 'react';

export default function Blogs() {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleMouseMove = (event) => {
        if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(true);
        }
    };
    return (
        <>
            <div className='home-nav-bar-drop-down-items'
                id='blogs-nav-bar-drop-down-items-id'
                ref={dropdownRef}
                onMouseMove={handleMouseMove}
                style={{ position: "relative", marginLeft: '5px' }}
            >
                <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    BLOGS
                    <svg className='home-nav-bar-drop-down-items-svg'
                        id='blogs-nav-bar-drop-down-items-svg-id'
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                    </svg>
                </p>
                {isDropdownOpen && (
                    <ul
                        className='dropdown-menu-class'
                        id='blogs-dropdown-menu-class-id'
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            listStyle: 'none'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <li className='nav-bar-dropdown-pages' id='blogs-nav-bar-dropdown-pages-id'>Login</li>

                    </ul>
                )}
            </div>
        </>
    )
}
