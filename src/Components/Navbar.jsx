import React, { useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <img src="/logo.png" alt="ProVital Logo" className="navbar__logo" />
        </div>

        <div className="navbar__right">
          <ul className="navbar__links">
            <li>
              <a href="#">List your practice</a>
            </li>
            <li>
              <a href="#">For Employers</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Speakers</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li
              className="login-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Login / Signup ▾
              {showDropdown && (
                <div className="dropdown-box">
                  <div className="dropdown__row">
                    <span className="role">Doctor</span>
                    <div className="auth-links">
                      <a href="#">Login</a>
                      <a href="#">Sign up</a>
                    </div>
                  </div>
                  <hr />
                  <div className="dropdown__row">
                    <span className="role">Patients</span>
                    <div className="auth-links">
                      <a href="#">Login</a>
                      <a href="#">Sign up</a>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>

          <div
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu mobile-only">
          <a href="#">Doctors</a>
          <a href="#">List your practice</a>
          <a href="#">For Employers</a>
          <a href="#">Courses</a>
          <a href="#">Books</a>
          <a href="#">Speakers</a>
          <div className="dropdown__item">
            <span>Doctor</span>
            <a href="#">Login</a>
            <a href="#">Sign up</a>
          </div>
          <div className="dropdown__item">
            <span>Patients</span>
            <a href="#">Login</a>
            <a href="#">Sign up</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
