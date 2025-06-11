import React from "react";
import "./video.css";

export default function Video() {
  return (
    <div className="section video-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/production.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
