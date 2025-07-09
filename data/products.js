// data/products.js

const products = {
  simba: {
    productName: "Simba Speed Governor",
    mainImage: "/products/SIMBA-SPEED-GOVERNOR.png",
    featuresImage: "/products/simba-with-policing-unit.png",
    tag: "Transport & Safety",
    intro:
      "Pita inspection bila stress —, Introducing Simba 4G — a smart, IoT-enabled speed governor by Numeral IOT, This compact 3-in-1 device combines a speed limiter, Telematics, and speed recorder, henhancing road safety and operational efficieny  ",
    features: [
      {
        feature: "Speed Limiting",
        explanation:
          "Automatically limits vehicle speed to 80 km/h, triggering alarms and slowing down the engine if exceeded.",
      },
      {
        feature: "Integrated GPS Tracking",
        explanation:
          "Tracks vehicle location in real-time and stores data locally and on central servers.",
      },
      {
        feature: "Data Recording",
        explanation:
          "Logs speed, position, and timestamps for review by fleet managers and enforcement agencies.",
      },
      {
        feature: "AI Technology",
        explanation:
          "Enhances safety by monitoring driver behavior and road conditions using AI.",
      },
      {
        feature: "Versatile Compatibility",
        explanation:
          "Works with all vehicle types—buses, trucks, vans, matatus, and private cars.",
      },
      {
        feature: "Passenger Wi-Fi (Upcoming)",
        explanation:
          "Future versions will offer built-in Wi-Fi for passenger connectivity.",
      },
    ],
  },

  water: {
    productName: "Smart Water Meter",
    mainImage: "/products/HILA0445.png",
    featuresImage: "/products/water-meter.png",
    tag: "Utilities",
    intro:
      "An IoT-powered water meter offering full visibility, automation, and control for efficient water management.",
    features: [
      {
        feature: "Remote Valve Control",
        explanation:
          "Open or close the water supply remotely—ideal for emergencies or maintenance.",
      },
      {
        feature: "Two-Way IoT Connectivity",
        explanation:
          "Monitors real-time water flow, detects leaks, and triggers diagnostic alerts instantly.",
      },
      {
        feature: "Prepaid & Postpaid Billing",
        explanation:
          "Supports flexible token-based top-ups and postpaid billing models with balance portability.",
      },
      {
        feature: "Automated Reporting & Analytics",
        explanation:
          "Provides detailed consumption summaries to inform usage and reduce wastage.",
      },
      {
        feature: "Rapid Installation",
        explanation:
          "Installs in under 30 minutes and includes dual batteries for up to 8 years of operation.",
      },
      {
        feature: "Robust & Tamper-Proof Design",
        explanation:
          "Withstands extreme temperatures and includes tamper alarms and local backup.",
      },
      {
        feature: "Remote Diagnostics & OTA Updates",
        explanation:
          "Enables over-the-air maintenance, reducing support costs and downtime.",
      },
    ],
  },

  power: {
    productName: "Smart Power Meter",
    mainImage: "/products/HILA0553.png",
    featuresImage: "/products/power-meter.png",
    tag: "Utilities",
    intro:
      "A smart prepaid power meter designed for landlords, developers, and firms seeking transparent, automated energy management.",
    features: [
      {
        feature: "Flexible Top-Up",
        explanation:
          "Recharge via web portal or mobile money. Tokens are instantly credited—no manual entry required.",
      },
      {
        feature: "Remote Power Control",
        explanation:
          "Switch power on/off remotely—ideal for vacant units, maintenance, or usage enforcement.",
      },
      {
        feature: "Peer-to-Peer Token Transfer",
        explanation:
          "Easily sambaza tokens between meters within the same building or estate.",
      },
      {
        feature: "Energy Budgeting & Alerts",
        explanation:
          "Set usage limits and receive alerts or automatically cut power to avoid overruns.",
      },
      {
        feature: "Real-Time Meter Health",
        explanation:
          "Monitors voltage, current, tampering, and battery status for proactive maintenance.",
      },
      {
        feature: "Consumption Reporting",
        explanation:
          "Generates daily, weekly, or monthly usage reports to support optimization.",
      },
      {
        feature: "OTA Firmware Management",
        explanation:
          "Receive firmware updates and diagnostics remotely, reducing on-site visits.",
      },
    ],
  },

  bundi: {
    productName: "Vehicle Tracking & Security ",
    mainImage: "/products/TRACKER-ENCLOSURE-BLACK-1.png",
    featuresImage: "/products/TRACKER-ENCLOSURE-BLACK-1.png",
    tag: "Transport & Safety",
    intro:
      "Numeral IOT has developed firmware, hardware and software for a tracking device and a car security system called BUNDI.",
    features: [
      {
        feature: "SMS Alert",
        explanation:
          "in case of tampering, alerts are sent to the owner through SM",
      },
      {
        feature: "Stop Engine",
        explanation:
          "Using your mobile phone a user can remotely stop the fitted vehicle.",
      },
      {
        feature: "Start Engine",
        explanation:
          "A user can as well turn on his vehicle remotely using his mobile phone.",
      },
      {
        feature: "Geofence",
        explanation: "this allows users to set travel distance limits",
      },

      {
        feature: "History replay",
        explanation: "a user can replay all the locations his vehicle visited",
      },
      {
        feature: "Mobile app",
        explanation:
          "we have developed android and IOS mobile apps for users to monitor their assets.",
      },
    ],
  },
};

export default products;
