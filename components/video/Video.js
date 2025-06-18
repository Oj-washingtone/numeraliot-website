"use client";
import React, { useEffect, useRef } from "react";
import "./video.css";
import Link from "next/link";

export default function VideoSection() {
  const sectionCount = 5; // update this if you add/remove sections
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--section-count",
        sectionCount.toString()
      );
    }
  }, [sectionCount]);

  return (
    <div className="video-scroll-container" ref={containerRef}>
      <div className="video-sticky-wrapper">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/production.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="scroll-content">
        <section className="overlay-text">
          <h1 className="video-overlay-title">
            We're building the future of IoT in Africa
          </h1>
          <Link href={"/contactus"}>
            <div className="nav-act-btn">Our Products</div>
          </Link>
        </section>
        <section className="overlay-text">
          <h1 className="video-overlay-title">
            And the technologies that make it possible
          </h1>
          <Link href={"/contactus"}>
            <div className="nav-act-btn">Our Solutions</div>
          </Link>
        </section>
        <section className="overlay-text">
          <h1 className="video-overlay-title">
            Our innovations create smarter ways for devices and people to
            connect
          </h1>
          <Link href={"/contactus"}>
            <div className="nav-act-btn">Tour our Facility</div>
          </Link>
        </section>
        <section className="overlay-text">
          <h1 className="video-overlay-title">
            And we're committed to securing every IoT connection
          </h1>
          <Link href={"/contactus"}>
            <div className="nav-act-btn">Privacy policy</div>
          </Link>
        </section>
      </div>
    </div>
  );
}
