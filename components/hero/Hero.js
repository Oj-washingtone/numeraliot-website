"use client";

import React from "react";
import "./hero.css";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contactus");
  };

  return (
    <div className="hero-section">
      <video className="hero-background-video" autoPlay muted loop playsInline>
        <source src="/production.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <div className="hero-descriptions-wrapper">
        <div className="badge">🚀 # Africa's no. 1 hardware manufacturer</div>
        <h1 className="hero-main-text">
          Building Africa's largest
          <br />
          <span className="secondary-title-part">IoT service platform</span>
        </h1>
        <p className="hero-description">
          We’re building the continent’s most robust Internet of Things (IoT)
          service platform — connecting people, businesses, and devices through
          smart, scalable, and locally manufactured technology. From smart
          metering to industrial automation, we empower innovation at every
          level.
        </p>

        <button className="hero-btn" onClick={handleNavigation}>
          Contact sales <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
