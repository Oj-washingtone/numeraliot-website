import React from "react";
import "./hero-section.css";

export default function HeroSection() {
  return (
    <div className="hero-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="hero-title">Revolutionalizing IoT Across Africa</h1>
            <h3 className="hero-subtitle">
              We are on a mission to build Africa's largest IOT service platform
              powered by proprietory hardware
            </h3>

            <div className="hero-actiosn">
              <button className="hero-action-btn contact-sales-btn">
                Contact sales
              </button>
              <button className="hero-action-btn">
                Book tour of our facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
