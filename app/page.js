import About from "@/components/about/About";
import BookTour from "@/components/book-tour/BookTour";
import HeroSection from "@/components/hero/HeroSection";
import Leadership from "@/components/leadership/Leadership";
import React from "react";

export default function page() {
  return (
    <div className="">
      <HeroSection />
      <About />
      {/* <Leadership /> */}
      {/* <BookTour /> */}
    </div>
  );
}
