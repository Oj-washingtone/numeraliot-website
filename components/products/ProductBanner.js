import React from "react";
import "./products.css";

export default function ProductBanner({ product }) {
  return (
    <div className="product-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-5 product-basics">
            <h1 className="product-name">{product.productName}</h1>
            <p>{product.intro}</p>
            <button className="submit-button">Purchase Now</button>
          </div>
          <div className="col-md-7">
            <div className="product-main-image">
              <img src={product.mainImage} alt={product.productName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
