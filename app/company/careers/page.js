import Banner from "@/components/hero/Banner";
import React from "react";
import "./careers.css";

export default function Careers() {
  const description =
    "At Numeral IoT, we want you to build a career where you’re challenged, valued, and learning from the best. Join us to build the future of human connection and the technology that makes it possible";
  return (
    <div className="">
      <Banner
        title={"Exciting career\nopportunities at Numeral IoT"}
        description={description}
        tag="JOIN US"
      />

      <div className="container section">
        <div className="creers-wrapper">
          <div className="search-career">
            <input type="text" name="title" placeholder="Job Title" />
            <select name="location" placeholder="Location">
              <option value={"nairobi"}>Nairobi</option>
              <option value={"mombasa"}>Mombasa</option>
              <option value={"kisumu"}>Kisumu</option>
              <option value={"mombasa"}>Mombasa</option>
            </select>
            <button type="button" className="btn-dark">
              <i className="bi bi-search"></i> Search
            </button>
          </div>
        </div>
      </div>

      {/* <div className=" has-grid-background">Has grid background</div> */}
    </div>
  );
}
