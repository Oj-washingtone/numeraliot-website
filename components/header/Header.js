"use client";

import { useState, useEffect } from "react";
import "./header.css";
import Link from "next/link";
import Nav from "./Nav";
import MenuDropdown from "./MenuDropdown";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("header-transparent");

  const toggleMunu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight =
        document.querySelector(".hero-section")?.offsetHeight || 100;

      if (scrollTop === 0) {
        setHeaderClass("header-transparent");
      } else if (scrollTop < heroHeight - 60) {
        setHeaderClass("header-darken");
      } else {
        setHeaderClass("header-solid");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${headerClass}`}>
      <div className="container">
        <div className="nav-main">
          <div className="logo">
            <a href="/">
              {/* stowais<span>.</span> */}
              <img src="/logo/logo1.png" alt="logo" />
            </a>
          </div>

          <div className="nav-links">
            <Nav />
            {/* <MenuDropdown>Menu dropdown</MenuDropdown> */}
          </div>

          <div className="header-right-small">
            {/* <div className="extra-links-wrapper">
              <a href="/auth/signin" className="extra-links">
                Staff Login
              </a>
            </div> */}

            <button className="nav-toggle-btn" onClick={toggleMunu}>
              {menuOpen ? (
                <i className="bi bi-x"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </button>
          </div>

          <div className="nav-actions">
            {/* <a href="/auth/signin" className="extra-links">
              Staff login
            </a> */}

            {/* <button
              className="nav-act-btn nav-act-btn-login"
              onClick={navigateSigninScreen}
            >
              Login
            </button> */}
            <button className="nav-act-btn">Contact us</button>
          </div>
        </div>

        <div className={`nav-small ${menuOpen ? "open" : ""}`}>
          <Nav />

          <div className="small-nav-actions">
            {/* <button className="login">Login</button> */}
            {/* <button className="nav-act-btn">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
