import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <img src="/logo/logo1.png" alt="logo" />
              </div>

              <div className="small-intro">
                <p className="footer-desc">
                  Numeral IoT – Pioneering smart electronic solutions in Kenya.
                  From vehicle tracking to smart energy meters, we innovate to
                  enhance safety, efficiency, and connectivity. Explore our
                  IoT-powered future today
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <h1 className="footer-title">Products</h1>
              <ul>
                <li>
                  <a href="#">Simba Speed Governor</a>
                </li>
                <li>
                  <a href="#">Bundi Vehicle Tracking & Security</a>
                </li>
                <li>
                  <a href="#">Transit tag</a>
                </li>
                <li>
                  <a href="#">Hewa speakers</a>
                </li>
                <li>
                  <a href="#">NIOT Smart Power Meter</a>
                </li>
                <li>
                  <a href="#">NIOT Smart Water Meter</a>
                </li>
                <li>
                  <a href="#">NIOT Smart Gas Meter</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h1 className="footer-title">Solutions</h1>
              <ul>
                <li>
                  <a href="#">Hardware Manufacturing</a>
                </li>
                <li>
                  <a href="#">Infinity engine</a>
                </li>
                <li>
                  <a href="#">IoT Platforms</a>
                </li>
                <li>
                  <a href="#">Fleet Telematics</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h1 className="footer-title">Company</h1>
              <ul>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Awards & Recognitions</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h1 className="footer-title">Contact us</h1>
              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill footer-link-icon"></i>
                  Solanite Godowns, Mombasa RD, Nairobi, Kenya.
                </li>
                <li>
                  <i className="bi bi-telephone-fill footer-link-icon"></i> +254
                  712 028 821
                </li>
                <li>
                  <i className="bi bi-envelope-fill footer-link-icon"></i>{" "}
                  info@numeraliot.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-stripe">
        <div className="container">
          <div className="footer-stripe-items">
            <p className="footer-copy">
              &copy; 2025. Numeral IoT | All rights reserved.
            </p>
            <div className="footer-socials">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
