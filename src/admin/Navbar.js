import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png"; // Tell webpack this JS file uses this image
import GoogleLogin from "react-google-login";
import axios from "axios";

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
  window.addEventListener("resize", showButton);

  const handleLogin = async (googleData) => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/google",
      {
        token: googleData.tokenId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // store returned user somehow
    if (res.status !== 200) {
      console.log("error");
    }

    console.log("logged in successfully");
    localStorage.setItem("googleToken", googleData.tokenId);
    <Redirect to="/post_list" />;
  };

  return (
    <div>
      <nav className="header navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="navbar-logo-img" src={logo} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Join CISSA
                            </Link>
                        </li> */}
            <li className="nav-item">
              <Link
                to="post_edit"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-links">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--primary'>Login</Button>} */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
