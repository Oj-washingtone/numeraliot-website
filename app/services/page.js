import React from "react";
import Banner from "@/components/hero/Banner";
import Image from "next/image";

import "./services.css";

export default function page() {
  return (
    <div className="services">
      <Banner
        title={"Our Services"}
        tag={"All services"}
        description={
          "Our services are crafted to enhance your digital presence, engage your audience, and deliver impactful \nresults. Here’s how we can assist you."
        }
      />
      <div className="services-wrapper container">
        <div className="row">
          <div className="col-md-11 " style={{ margin: "10px auto" }}>
            <div className="row">
              <div className="col-md-6 service-section">
                <div className="service-section-image">
                  <Image
                    src={
                      "/software-development-agency-it-coworkers-doing-brainstorming-coding.jpg"
                    }
                    alt="software-development-agency-it-coworkers-doing-brainstorming-coding"
                    width={300}
                    height={100}
                  />
                </div>
              </div>
              <div className="col-md-6 service-section">
                <h3 className="service-title">Commitment to excellence</h3>
                <p>
                  We are dedicated to providing top-notch service to our
                  clients. Every post, campaign, and strategy is crafted with
                  unwavering attention to quality and excellence.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 order-2 order-md-1 service-section">
                <h3 className="service-title">Deep engagement</h3>
                <p>
                  We are dedicated to providing top-notch service to our
                  clients. Every post, campaign, and strategy is crafted with
                  unwavering attention to quality and excellence.
                </p>
              </div>
              <div className="col-md-6 order-1 order-md-2 service-section">
                <div className="service-section-image">
                  <Image
                    src={"/2150690161.jpg"}
                    alt="software-development-agency-it-coworkers-doing-brainstorming-coding"
                    width={300}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-list">
        <div className="container">
          <div className="header-center">
            <h1 className="header-title ">
              Highlights of Incredible products <br />
              <span> that we've built</span>
            </h1>
            <p className="title-explanation">
              We engineer our incredible products by meticulously combining
              innovative hardware design, robust code, and human-centered
              interaction design, resulting in solutions that are powerful,
              reliable, and genuinely intuitive.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <Image
                  width={100}
                  height={100}
                  src={"/icons/reach1.png"}
                  alt="icon"
                />

                <h3 className="service-name">Hardware manufacture</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
