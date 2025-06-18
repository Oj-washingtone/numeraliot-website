import React from "react";
import "./about.css";
// import teamMeeting from "./assets/team-meeting.jpg"; // Replace with correct path
// import officeView from "./assets/office-view.jpg"; // Replace with correct path

export default function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-container">
          <div className="about-left">
            <div className="image-grid">
              <img
                src="/1737017587370.jpeg"
                alt="Team Meeting"
                className="image-large"
              />
            </div>

            <div className="stats">
              <div className="stat-box black">
                <h2>10+</h2>
                <p>Years of experience</p>
              </div>
              <div className="stat-box green">
                <h2>10K+</h2>
                <p>Happy customers</p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="badge">🤝 Your gateway to IoT solutions</div>
            <h1>
              Defining the future of <br />
              <span className="highlight">IoT in Africa!</span>
            </h1>
            <p className="about-description">
              At Numeral IOT, we're shaping Africa’s connected future — one
              device at a time. We build powerful IoT solutions that bridge the
              gap between physical systems and digital intelligence, enabling
              safer roads, smarter infrastructure, and data-driven decisions.
              From speed governors that save lives to custom-built platforms
              that power next-generation services, we’re engineering the
              technology that moves Africa forward.
            </p>
            <ul className="features">
              <li>
                <i className="bi bi-check-circle-fill"></i> Smart, Scalable IoT
                Solutions
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> End-to-End
                Innovation
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Security &
                Reliability First
              </li>
            </ul>
            <button className="discover-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
