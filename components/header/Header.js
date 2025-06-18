"use client";

import { useState, useEffect } from "react";
import "./header.css";
import Link from "next/link";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("header-transparent");

  const pathname = usePathname();

  const toggleMunu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const shouldScrollChangeHeader = pathname === "/";

    if (!shouldScrollChangeHeader) {
      setHeaderClass("header-solid");
      return;
    }

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
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <div className={`header-wrapper ${headerClass}`}>
        <div className="container">
          <div className="nav-main">
            <div className="logo">
              <a href="/">
                <img
                  src={
                    headerClass === "header-solid"
                      ? "/logo/logo1.png"
                      : "/logo/logo-white.png"
                  }
                  alt="logo"
                />
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
                  <i
                    className={`bi bi-x ${
                      headerClass !== "header-solid"
                        ? "icon-white"
                        : "icon-black"
                    }`}
                  ></i>
                ) : (
                  <i
                    className={`bi bi-list ${
                      headerClass !== "header-solid"
                        ? "icon-white"
                        : "icon-black"
                    }`}
                  ></i>
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
              <Link href={"/contactus"}>
                <div className="nav-act-btn">Contact us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`nav-small ${menuOpen ? "open" : ""}`}>
        <Nav />
      </div>
    </>
  );
}
