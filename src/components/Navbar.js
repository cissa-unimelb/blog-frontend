import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { Button } from './Button';
import logo from './images/logo.png'; // Tell webpack this JS file uses this image
console.log(logo);

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="header navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-img" src={logo} alt="Logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {/* <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Join CISSA
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to="post_edit" className="nav-links" onClick={closeMobileMenu}>
                                Create Post
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--primary'>Login</Button>} */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar

