import React from "react";
import "./products.css";

export default function ProductFeatures({ product }) {
  const features = product.features;
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <div className="section container">
      <div className="header-center">
        <h1 className="header-title">Technical details</h1>
        <p className="title-explanation">
          We combine cutting-edge technology and a user-first approach to make
          innovation simple.
        </p>
      </div>

      <div className="features-section">
        <div className="feature-column left">
          {leftFeatures.map((item, index) => (
            <div className="feature" key={index}>
              <h4 className="feature-name">{item.feature}</h4>
              <p>{item.explanation}</p>
            </div>
          ))}
        </div>

        <div className="product-image">
          <img src={product.featuresImage} alt={product.productName} />
        </div>

        <div className="feature-column right">
          {rightFeatures.map((item, index) => (
            <div className="feature" key={index + midpoint}>
              <h4 className="feature-name">{item.feature}</h4>
              <p>{item.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
