import React from "react";
import "./contactus.css";

export default function ContactUs() {
  return (
    <div className="unhide-section">
      <div className="container">
        <div className="row">
          <div className="contact-image-banner">
            <img src="/DSC01205.JPG" alt="numeral staff in boadroom" />
          </div>
          <div className="col-md-6 margin-auto">
            <div className="contact-us-form">
              <h1 className="contact-us-title">Let's innovate together</h1>
              <p>You can reach us anytime by submiting the form below</p>

              <form name="contact-us" className="contact-us-form-wrapper">
                <div className="input-wrapper">
                  <input type="text" name="name" required placeholder=" " />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="input-area"
                  />
                  <label htmlFor="message">Email Address</label>
                </div>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="phone"
                    placeholder=" "
                    className="input-area"
                  />
                  <label htmlFor="message">Phone number</label>
                </div>
                <div className="input-wrapper">
                  <textarea name="message" required placeholder=""></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                <button className="submit-button">Send Messsage</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-gray contact-card">
              <i className="bi bi-geo-alt"></i>
              <h2 className="card-title">Office Address</h2>
              <p className="card-text">
                Solanite Godowns, Mombasa RD, Nairobi, Kenya.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-gray contact-card">
              <i className="bi bi-envelope"></i>
              <h1 className="card-title">Email us</h1>
              <p className="card-text">
                We're on top of things and aim to respond to all inquiries
                within 24 hours.
              </p>
              <a href="mailto:info@numeraliot.com" className="card-link">
                info@numeraliot.com
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-gray contact-card">
              <i className="bi bi-telephone-fill"></i>
              <h1 className="card-title">Call us</h1>
              <p className="card-text">
                Let's work together towards a common goal - get in touch!
              </p>
              <a href="tel: +254 111 014 700" className="card-link">
                {" "}
                +254 111 014 700
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="map-view">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.038917389199!2d36.8941151!3d-1.3360464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13f7949e739b%3A0x1b7edde103b60350!2sNumeral%20IOT%20-%20IOT%20FOR%20AFRICA!5e0!3m2!1sen!2ske!4v1718534011222!5m2!1sen!2ske"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
