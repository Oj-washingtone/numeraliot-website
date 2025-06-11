import React from "react";
import "./products.css";

export default function Products() {
  return (
    <div className="section">
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
              <a href="#" className="link view-product-link">
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
                Introducing Simba 4G, a cutting-edge IoT-enabled speed governor
                designed and manufactured by Numeral IOT in full compliance with
                KEBS KS 2295:2018, CMTE, and NTSA regulations. Engineered for
                reliability and versatility, Simba 4G is a 3-in-1 device that
                integrates a speed limiter, real-time fleet management system,
                and speed recorder into a single compact unit. It is compatible
                with all types of commercial and private vehicles, including
                buses, trucks, matatus, and vans. Trusted across the transport
                sector, Simba 4G has proven to enhance road safety and
                operational efficiency—making it the top-performing speed
                governor on the market.
              </p>
              <a href="#" className="link view-product-link">
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

        <div className="section row">
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
                Our Smart Water Meter is an advanced IoT solution designed to
                revolutionize water management by providing accurate, real-time
                monitoring of water usage. Built for efficiency and reliability,
                it enables automated data collection, leak detection, and remote
                valve control—empowering utility providers and property managers
                to optimize consumption, reduce waste, and enhance billing
                accuracy. Whether deployed in residential, commercial, or
                industrial settings, our smart water meter ensures smarter
                decision-making and sustainable water usage at every level.
              </p>
              <a href="#" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className=" section row">
          <div className="col-md-6 order-2 order-md-1">
            <div className="product-info-wrapper">
              <h1 className="home-product-title industry">Entertainment</h1>
              <h1 className="home-product-title">Hewa Bluetooth Speaker</h1>
              <p className="home-product-details">
                Our Smart Power Meter transforms traditional energy systems by
                delivering precise, real-time insights into power consumption.
                Designed to support energy efficiency and sustainability, it
                enables seamless integration with smart building technologies,
                helping users monitor usage patterns, reduce energy waste, and
                make informed decisions. Whether in homes, businesses, or
                industrial setups, this device lays the groundwork for a
                smarter, greener, and more reliable power infrastructure.
              </p>
              <a href="#" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="product-image-wrapper">
              <img
                src="/products/HEWA-PNG.png"
                alt="Simba speed govanor"
                className="product-image"
              />
            </div>
          </div>
        </div>

        <div className=" section row">
          <div className="col-md-6 order-1 order-md-1">
            <div className="product-image-wrapper">
              <img
                src="/products/power-mter.png"
                alt="Simba speed govanor"
                className="product-image"
              />
            </div>
          </div>
          <div className="col-md-6 order-2 order-md-2">
            <div className="product-info-wrapper">
              <h1 className="home-product-title industry">Power</h1>
              <h1 className="home-product-title">Smart Power meter</h1>
              <p className="home-product-details">
                Our Smart Power Meter transforms traditional energy systems by
                delivering precise, real-time insights into power consumption.
                Designed to support energy efficiency and sustainability, it
                enables seamless integration with smart building technologies,
                helping users monitor usage patterns, reduce energy waste, and
                make informed decisions. Whether in homes, businesses, or
                industrial setups, this device lays the groundwork for a
                smarter, greener, and more reliable power infrastructure.
              </p>
              <a href="#" className="link view-product-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="discover-more-wrapper">
          <button className="discover-button explore-btn">
            Discover more products
          </button>
        </div>
      </div>
    </div>
  );
}
