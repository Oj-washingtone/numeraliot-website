"use client";

import React, { useEffect, useState } from "react";

export default function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button className="scroll-up-btn" onClick={scrollToTop}>
        <i className="bi bi-arrow-up"></i>
      </button>
    )
  );
}
