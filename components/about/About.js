import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image-wrapper">
              <img src="/1737017587370.jpeg" alt="About us" />
            </div>
          </div>
          <div className="col-md-6 about-content">
            <h1 className="section-title">Who we are</h1>
            <p>
              At Numeral IoT, we are on a mission to build Africa’s largest IoT
              service platform—empowering utilities, telecom providers, and
              consumers with seamless connectivity and smart solutions. We
              understand the unique needs of the African market, where
              affordability is key. That’s why we’ve designed and established
              our own manufacturing facility to produce high-quality,
              cost-effective sensors and devices at scale. By controlling both
              hardware and platform development, we ensure a streamlined,
              affordable path to IoT adoption for businesses and individuals
              alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
