import React from "react";
import "../products.css";

export default function SmartWaterMeter() {
  return (
    <div className="products-single-wrapper section">
      <div className="container">
        {/* <div className="generic-hero">
          <p className="product-solution-intro">SOmetjing about the product</p>
        </div> */}
        <div className="row section">
          <div className="col-md-5">
            <div className="product-image">
              <img
                src="/images/products/HILA0445.png"
                alt="Simba Speed governor"
              />
            </div>
          </div>

          <div className="col-md-7 product-solutions-details">
            <h1 className="product-solution-title ">NIOT Smart Water Meter</h1>
            <p className="product-solution-intro">
              Say goodbye to water wastage and inaccurate billing with the NIOT
              Smart Water Meter—the future of water management. Designed for
              homes, businesses, and industries, this advanced IoT-enabled meter
              provides real-time monitoring, automated readings, and leak
              detection, ensuring accurate billing and efficient water usage.
            </p>
            <p>
              With remote access via an intuitive dashboard, you can track
              consumption, receive alerts for unusual usage, and optimize your
              water supply like never before. Whether you're a homeowner looking
              to cut down on utility costs or a business aiming for
              sustainability, the NIOT Smart Water Meter is your ultimate
              solution for precision, efficiency, and control.
            </p>

            <div className="features">
              <h1 className="product-section-subtitle">Features</h1>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature_card">Something Amazing</div>
                </div>
                <div className="col-md-6">
                  <div className="feature_card">Something Amazing</div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="feature_card">Something Amazing</div>
                </div>
                <div className="col-md-6">
                  <div className="feature_card">Something Amazing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
