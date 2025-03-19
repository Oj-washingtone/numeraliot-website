import React from "react";
import "./book-tour.css";

export default function BookTour() {
  return (
    <div className="boot-tour-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 tour-details-wrapper">
            <div className="row">
              <div className="col-md-7">
                <h2 className="book-tour-subtitle">Connect with us</h2>
                <h1 className="book-tour-title">
                  We would love to show you around
                </h1>
                <ul>
                  <li>State-of-the-art factory</li>
                  <li>Live demonstration of our IoT solutions</li>
                  <li>Meet the engineers behind our innovations</li>
                  <li>Hands-on experience with our smart devices</li>
                  <li>Explore how IoT is transforming industries</li>
                </ul>
              </div>
              <div className="col-md-5">
                <div className="book-tour-form-wrapper">
                  <h1 className="book-tour-subtitle">Schedule a Tour</h1>
                  <form name="book-tour" method="post">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="firstName"
                          required
                          placeholder="Enter First Name"
                          className="input-field"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="lastName"
                          required
                          placeholder=" Enter Last Name "
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          name="companyName"
                          placeholder="Enter Company Name"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <button className="_btn _btn_primary submit-btn">
                      Schedule a tour
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
