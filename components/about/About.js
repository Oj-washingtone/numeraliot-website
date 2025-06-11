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
            <div className="badge">🤝 Your gateway to digital success</div>
            <h1>
              Defining the future of <br />
              <span className="highlight">IoT in Africa!</span>
            </h1>
            <p>
              Embrace a new era of digital success with Mizzle. Our team
              combines cutting-edge design with robust development to deliver
              websites that captivate and convert.
            </p>
            <ul className="features">
              <li>✅ Emphasis on ROI-driven solutions</li>
              <li>✅ Expert team with diverse skill</li>
              <li>✅ Proven track record of delivering results</li>
            </ul>
            <button className="discover-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
