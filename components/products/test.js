import React from "react";

export default function ProductPage() {
  return (
    <>
      <style>{`
        :root {
          --primary-color: #007bff;
        }

        .product-page {
          padding: 3rem 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
          font-family: sans-serif;
        }

        .product-page header,
        .section-title {
          text-align: center;
          color: var(--primary-color);
        }

        .product-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .product-section {
            grid-template-columns: 1fr 1fr;
          }
        }

        .product-image {
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .product-description {
          color: #333;
        }

        .feature-list {
          list-style: disc;
          padding-left: 1.5rem;
          color: #333;
        }

        .highlight-section {
          background-color: #f9f9f9;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.05);
          margin-bottom: 4rem;
        }
      `}</style>

      <div className="product-page">
        <header>
          <h1 className="text-4xl font-bold">Smart Utilities</h1>
          <p className="text-lg text-gray-600 mt-2">
            Advanced IoT Solutions for Energy & Water Management
          </p>
        </header>

        <section className="product-section">
          <div>
            <img
              src="/products/HILA0553.png"
              alt="Smart Power Meter"
              className="product-image"
            />
          </div>
          <div>
            <h2 className="section-title text-3xl font-semibold mb-4">
              Power Meter – Intelligent, Connected, Cost‑Effective
            </h2>
            <p className="product-description mb-4">
              An advanced prepaid smart power meter offering comprehensive
              control and real-time energy data. Ideal for developers,
              landlords, and firms looking for transparency and sustainability
              in energy use.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Flexible Top-Up:</strong> Recharge remotely via web or
                mobile money. Instant token crediting.
              </li>
              <li>
                <strong>Remote Power Control:</strong> Instantly turn power
                on/off remotely.
              </li>
              <li>
                <strong>Peer-to-Peer Transfers:</strong> Sambaza tokens between
                meters.
              </li>
              <li>
                <strong>Energy Budgeting:</strong> Set limits and get alerts or
                auto shut-off.
              </li>
              <li>
                <strong>Meter Health:</strong> Diagnostics for voltage,
                tampering, battery, etc.
              </li>
              <li>
                <strong>Consumption Reporting:</strong> Auto-generated daily to
                monthly reports.
              </li>
              <li>
                <strong>OTA Firmware:</strong> Remote updates & diagnostics
                reduce site visits.
              </li>
            </ul>
          </div>
        </section>

        <section className="highlight-section">
          <h3 className="section-title text-2xl font-semibold mb-4">
            Typical Deployment Scenarios
          </h3>
          <ul className="feature-list">
            <li>
              <strong>New Residential Projects:</strong> Future-proof billing
              from construction phase.
            </li>
            <li>
              <strong>Office Parks:</strong> Sub-metering and budget control.
            </li>
            <li>
              <strong>Rental Portfolios:</strong> Simplified leases and
              pay-as-you-use billing.
            </li>
            <li>
              <strong>Mixed-Use Developments:</strong> Tiered tariffs and
              zone-specific reports.
            </li>
          </ul>
        </section>

        <section className="product-section">
          <div>
            <img
              src="/products/HILA0445.png"
              alt="Smart Water Meter"
              className="product-image"
            />
          </div>
          <div>
            <h2 className="section-title text-3xl font-semibold mb-4">
              Smart Water Meter
            </h2>
            <p className="product-description mb-4">
              An advanced IoT water metering solution designed for full
              visibility, control, and automation of water consumption.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Remote Valve Control:</strong> Open/close from any
                location.
              </li>
              <li>
                <strong>Two-Way IoT:</strong> Real-time monitoring and alerts
                for leaks/tampering.
              </li>
              <li>
                <strong>Billing Flexibility:</strong> Supports both prepaid and
                postpaid with sambaza support.
              </li>
              <li>
                <strong>Consumption Analytics:</strong> Automated reports to
                optimize usage.
              </li>
              <li>
                <strong>Fast Installation:</strong> Under 30 minutes, with
                8-year battery backup.
              </li>
              <li>
                <strong>Durability & Security:</strong> Withstands -20°C to
                85°C, anti-tamper, local backup.
              </li>
              <li>
                <strong>Remote Updates:</strong> OTA firmware & diagnostics
                support.
              </li>
            </ul>
          </div>
        </section>

        <section className="highlight-section">
          <h3 className="section-title text-2xl font-semibold mb-4">
            Why It’s Ideal for Developers & Private Firms
          </h3>
          <ul className="feature-list">
            <li>
              <strong>No Manual Reads:</strong> Automated readings eliminate
              fraud and errors.
            </li>
            <li>
              <strong>Leak Detection:</strong> Early alerts minimize water loss
              and maximize ROI.
            </li>
            <li>
              <strong>Empowered Users:</strong> Transparency and self-service
              top-ups reduce disputes.
            </li>
            <li>
              <strong>Sustainability:</strong> Supports ESG goals and
              conservation efforts.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
