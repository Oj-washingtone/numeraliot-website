import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Partners from "@/components/partners/partners";
import Products from "@/components/products/Products";
import ServiceSection from "@/components/services/ServiceSection";
import VideoSection from "@/components/video/Video";
import Video from "@/components/video/Video";
import WhyChooseUs from "@/components/why-us/WhyChooseUs";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Hero />
      <Partners />
      <About />
      <ServiceSection />
      <Products />
      <VideoSection />
      <WhyChooseUs />
    </div>
  );
}
