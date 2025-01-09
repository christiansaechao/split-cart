import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navLinks = [
    { title: "who", text: "who's it for" },
    { title: "how", text: "how it works" },
    { title: "faq", text: "faq / support" },
  ];

  const handleMenuToggle = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="logo" src="https://i.imgur.com/XSiLpNl.png" />
      </Link>
      <div className="menu-btn" onClick={() => handleMenuToggle()}>
        &#9776;
      </div>
      <div className={`mobile-link-container ${menuActive ? "active" : ""}`}>
        {navLinks.map((link) => {
          return (
            <Link
              to={`/${link.title}`}
              key={link.title}
              className="link"
              onClick={() => handleMenuToggle()}
            >
              {link.text}
            </Link>
          );
        })}
        <div className="phoneNumber">
          <a href="tel:+1888-625-4349">1 (888) 625-4349</a>
        </div>
        <div className="sign-in-container">
          <Link
            to="https://checkout.splitcart.com/Sign-In?"
            className="sign-in"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
