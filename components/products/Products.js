import React from "react";
import "./products.css";

export default function Products() {
  return (
    <div className="section product-wrapper">
      <div className="container">
        <div className="header-center">
          <h1 className="header-title ">
            Highlights of Incredible products <br />
            <span> that we've built</span>
          </h1>
          <p className="title-explanation">
            We engineer our incredible products by meticulously combining
            innovative hardware design, robust code, and human-centered
            interaction design, resulting in solutions that are powerful,
            reliable, and genuinely intuitive.
          </p>
        </div>

        <div className=" row">
          <div className="col-md-6 order-1 order-md-1">
            <div className="product-image-wrapper">
              <img
                src="/products/infinity-engine.png"
                alt="Simba speed govanor"
                className="product-image"
              />
            </div>
          </div>
          <div className="col-md-6 order-2 order-md-2">
            <div className="product-info-wrapper">
              <h1 className="home-product-title industry">Microcontroller</h1>
              <h1 className="home-product-title">Infinity Engine</h1>
              <p className="home-product-details">
                We engineer our incredible products by meticulously combining
                innovative hardware design, robust code, and human-centered
                interaction design, resulting in solutions that are powerful,
                reliable, and genuinely intuitive.
              </p>
              <a href="/products/infinity" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className=" row">
          <div className="col-md-6 order-2 order-md-1">
            <div className="product-info-wrapper">
              <h1 className="home-product-title industry">Transport</h1>
              <h1 className="home-product-title">Simba Speed Governor</h1>
              <p className="home-product-details">
                Simba 4G is a smart, IoT-enabled speed governor by Numeral IOT,
                combining a speed limiter, real-time fleet tracking, and
                recorder in one compact device. Fully compliant with KEBS and
                NTSA standards, it’s trusted for enhancing road safety and fleet
                efficiency.
              </p>

              <a href="/products/simba" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-1">
            <div className="product-image-wrapper">
              <img
                src="/products/SIMBA-SPEED-GOVERNOR.png"
                alt="Simba speed govanor"
                className="product-image"
              />
            </div>
          </div>
        </div>

        <div className="section row product-brief-item">
          <div className="col-md-6 order-1 order-md-1">
            <div className="product-image-wrapper">
              <img
                src="/products/water-meter.png"
                alt="Simba speed govanor"
                className="product-image"
              />
            </div>
          </div>
          <div className="col-md-6 order-2 order-md-2">
            <div className="product-info-wrapper">
              <h1 className="home-product-title industry">Unitilities</h1>
              <h1 className="home-product-title">Smart Water meter</h1>
              <p className="home-product-details">
                Our Smart Water Meter offers real-time water usage monitoring,
                leak detection, and remote valve control. Designed for accuracy
                and efficiency, it helps reduce waste and improve billing in
                residential, commercial, and industrial settings.
              </p>

              <a href="/products/water" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className=" row">
          <div className="col-md-6 order-2 order-md-1">
            <div className="product-info-wrapper">
              <h1 className="home-product-title industry">Transport</h1>
              <h1 className="home-product-title">iKontrol My Car</h1>
              <p className="home-product-details">
                An advanced vehicle monitoring and management solution offering
                real-time GPS tracking, live ai camera, vehicle diagnostics, and
                more. From our custom platform dubbed ikontrol 360, users will
                be able to control the following functions
              </p>

              <a href="/products/simba" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-1">
            <div className="product-image-wrapper">
              <img
                src="/products/TRACKER-ENCLOSURE-BLACK-1.png"
                alt="Tracking device"
                className="product-image"
              />
            </div>
          </div>
        </div>

        {/* <div className="discover-more-wrapper">
          <button className="discover-button explore-btn">
            Discover more products
          </button>
        </div> */}
      </div>
    </div>
  );
}
