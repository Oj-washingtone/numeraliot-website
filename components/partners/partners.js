import React from "react";
import "./partners.css";

export default function Partners() {
  const brandImages = Array.from(
    { length: 15 },
    (_, i) => `/partners/${i + 1}.png`
  );

  return (
    <div className="partners-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <h2 className="patners-title">
              100+ Companies <br />
              trust us
            </h2>
          </div>
          <div className="col-md-9">
            <div className="brands-scroll-wrapper">
              <div className="brands-scroll">
                {[...brandImages, ...brandImages].map((src, idx) => (
                  <img
                    src={src}
                    alt={`Partner ${idx + 1}`}
                    key={idx}
                    className="brand-img"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
