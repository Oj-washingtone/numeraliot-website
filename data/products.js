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

  infinity: {
    productName: "Infinity Engine",
    mainImage: "/products/infinity-engine.png",
    featuresImage: "/products/infinity-engine.png",
    tag: "Microcontrollers",
    intro:
      "This communication module powers our hardware devices. The features include 4G LTE communication, \nRTOS/Linux processing, and input/output pin control.",
    features: [
      {
        feature: "Connectivity",
        explanation:
          "With 4G communication, this feature enables our devices to connect and communicate with each other as well as our central server. It supports a wide range of wireless and cellular protocols, allowing for flexible deployment in a variety of conditions",
      },
      {
        feature: "Data Transmission",
        explanation:
          "Enables quick data transmission to cloud servers or local gateways for processing.",
      },
      {
        feature: "Power Efficiency",
        explanation:
          "Utilizes and maintains minimal power consumption. This allows our devices to work for longer periods of time without needing to be charged frequently.",
      },
      {
        feature: "Security",
        explanation:
          "Using built-in encryption and authentication procedures, the Numeral Infinity Engine polices data exchanged between devices to verify its security and guard against possible breaches.",
      },
    ],
  },

  bundi: {
    productName: "iKontrol My Car ",
    mainImage: "/products/TRACKER-ENCLOSURE-BLACK-1.png",
    featuresImage: "/products/TRACKER-ENCLOSURE-BLACK-1.png",
    tag: "Transport & Safety",
    intro:
      "Numeral IOT has developed firmware, hardware and software for a tracking device and a car security system called BUNDI.",
    features: [
      {
        feature: "Geo-Fencing",
        explanation:
          "Set virtual boundaries and receive instant alerts when your vehicle enters or exits designated zones.",
      },
      {
        feature: "Historical Route Playback ",
        explanation:
          "Review past routes and locations with stored historical movement data..",
      },
      {
        feature: "Custom Alerts and Notifications",
        explanation:
          "Set custom alerts for events such as low battery, geo-fence breaches, motion detection, overspeed alerts, and ignition alerts",
      },
      {
        feature: "WiFi Hotspots",
        explanation:
          "Enjoy internet access within your vehicle with WiFi connectivity, supporting multiple devices",
      },

      {
        feature: "Engine Cut-Out (Immobiliser) Feature",
        explanation:
          "Remotely control your vehicle’s engine with the ability to stop the vehicle.",
      },
      {
        feature: "OBD-II Data Access",
        explanation:
          "Diagnose vehicle performance on various parameters like engine RPM, speed, and fuel level. Receive alerts for maintenance issues",
      },
      {
        feature: "5G LTE Connectivity ",
        explanation:
          "Fast data transmission and firmware updates with wide coverage even in low signal areas.",
      },
    ],
  },
};

export default products;
