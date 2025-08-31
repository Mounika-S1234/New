import React, { useState } from "react";
import "./Navbar.css";

const Logo = () => (
  <div className="brand">
    {/* simple fern + text to match the header in the image */}
    <svg className="fern" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M3 21s6-9 9-12c1.5-1.5 4-4 4-4s-2.5 1-4 2C9 11 6 14 3 21z" fill="currentColor" />
    </svg>
    <span className="brand-text">WHICH MANUKA IS FOR ME?</span>
  </div>
);

const AccountIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
    />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45A1 1 0 0 0 10 18h8v-2h-7.42l.9-1.63L18 6H7z"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Logo />

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#shop">Shop</a>
        <a href="#explore">Explore</a>
        <a className="cta" href="#which">NEW ZEALAND HONEY CO.</a>
        <a href="#about">About</a>
        <a href="#rewards">Rewards</a>
        <a href="#contact">Contact</a>

        {/* on small screens we keep icons inside the menu too */}
        <div className="mobile-icons">
          <button className="icon-btn" aria-label="Account">
            <AccountIcon />
          </button>
          <button className="icon-btn cart" aria-label="Cart">
            <CartIcon />
            <span className="badge">0</span>
          </button>
        </div>
      </div>

      {/* desktop icons */}
      <div className="icons">
        <button className="icon-btn" aria-label="Account">
          <AccountIcon />
        </button>
        <button className="icon-btn cart" aria-label="Cart">
          <CartIcon />
          <span className="badge">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
