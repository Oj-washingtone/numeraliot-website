import React from "react";
import "./servicesSection.css";

export default function ServiceSection() {
  return (
    <div className="section services-wrapper black">
      <div className="container">
        <div className="section-header dark_background">
          <div className="badge">
            🚀 Innovative solutions, Measurable impact
          </div>
          <h1>
            We specialize in the following <br /> solutions
          </h1>
        </div>

        <div className="row services-list">
          <div className="col-md-3">
            <div className="card-dark service-card">
              <div className="icon-holder">
                <i className="bi bi-cpu"></i>
              </div>
              <h1 className="service-name">Hardware Manufacturing</h1>
              <p className="service-description">
                We design and manufacture cost-effective IoT hardware using
                efficient sensors and smart production techniques. Our focus is
                on building durable, scalable devices that power seamless
                connectivity and long-term performance
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-dark service-card">
              <div className="icon-holder">
                <i className="bi bi-hdd-network"></i>
              </div>
              <h1 className="service-name">IoT Products and solutions</h1>
              <p className="service-description">
                We deliver innovative IoT products and solutions that connect
                the physical and digital worlds. Our systems are designed to
                streamline operations, enhance user experience, and provide
                real-time insights for smarter decisions.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-dark service-card">
              <div className="icon-holder">
                <i className="bi bi-boxes"></i>
              </div>
              <h1 className="service-name">Software development</h1>
              <p className="service-description">
                We build reliable and scalable software solutions tailored to
                your unique business needs. From concept to deployment, our team
                ensures every product is user-focused, performance-driven, and
                built to grow with your business.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-dark service-card">
              <div className="icon-holder">
                <i className="bi bi-robot"></i>
              </div>
              <h1 className="service-name">AI & Edge Intelligence</h1>
              <p className="service-description">
                We integrate AI and machine learning into IoT devices to enable
                real-time, autonomous decision-making at the edge. By minimizing
                latency and reducing dependence on the cloud, our solutions
                boost efficiency, responsiveness, and overall system
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
