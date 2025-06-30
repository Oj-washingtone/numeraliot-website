import React from "react";
import "./hero.css";

export default function Banner({ title, tag, description }) {
  return (
    <div className="banner-other-pages">
      <div className="container">
        <div className="content">
          {tag && <span>{tag}</span>}
          <h1 className="hero-main-text title">{title}</h1>
          <p className="hero-description description">{description}</p>
        </div>
      </div>
    </div>
  );
}
