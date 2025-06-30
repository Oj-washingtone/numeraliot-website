// data/products.js

const products = {
  simba: {
    productName: "Simba Speed Governor",
    mainImage: "/products/SIMBA-SPEED-GOVERNOR.png",
    featuresImage: "/products/simba-with-policing-unit.png",
    intro:
      "Introducing Simba 4G, a cutting-edge IoT-enabled speed governor designed and manufactured by Numeral IOT in full compliance with KEBS KS 2295:2018, CMTE, and NTSA regulations. Engineered for reliability and versatility, Simba 4G is a 3-in-1 device that integrates a speed limiter, real-time fleet management system, and speed recorder into a single compact unit. It is compatible with all types of commercial and private vehicles, including buses, trucks, matatus, and vans. Trusted across the transport sector, Simba 4G has proven to enhance road safety and operational efficiency—making it the top-performing speed governor on the market.",
    features: [
      {
        feature: "Speed Limiting",
        explanation:
          "Commercial vehicles, matatus, omnibuses, and other public service vehicles are restricted from exceeding 80 kilometers per hour on Kenyan roads. Simba 5G enforces this by capping the speed at 80 km/h. If the vehicle exceeds this limit, an alarm goes off, and if the driver does not slow down, the engine will progressively reduce the vehicle's speed to 80 km/h",
      },
      {
        feature: "Integrated GPS Tracking ",
        explanation:
          "Simba Speed Governor's GPS tracking system uses satellite technology to pinpoint vehicles in real time. Once the location data is collected, it is sent from the device to our central server. This is done in real time via a cellular network. The data is also stored on the device and can be extracted via a USB port on the gadget.",
      },
      {
        feature: "Data Recording",
        explanation:
          "The device records both the vehicle's speed & position and sends the information to our central servers. Fleet management and enforcement officers can access this data and evaluate each vehicle's movement history. The data contains not only geographic locations, but also timestamps, speed information, and other metrics.",
      },
      {
        feature: "AI Technology",
        explanation:
          "This new feature will eco our holistic approach to road safety. Not only will fleet managers and enforcers continue to monitor speed and vehicle location, but they will also be able to keep an eye on driver behaviour and road conditions. With this added layer of monitoring, we aim to play our part in reducing road-related accidents.",
      },
      {
        feature: "Versatile Compatibility ",
        explanation:
          " Simba 5G is compatible with a wide range of vehicles, including buses, trucks, matatus, and private vans. Simba 5G haibagui.",
      },
      {
        feature: "Passenger Wi-Fi Connectivity (Upcoming) ",
        explanation:
          "Recognizing the need for enhanced passenger experience, future versions of the Simba Speed Governor will include builtin Wi-Fi capabilities, allowing passengers to stay connected on the go.",
      },
    ],
  },
  hewa: {
    productName: "Hewa Bluetooth Speakers",
    mainImage: "/products/hewa__2_.png",
    featuresImage: "/products/hewa__2_.png",
    intro:
      "An innovative water purification solution using UV and nano-filtration technologies.",
    features: [
      {
        feature: "Multi-stage Filtration",
        explanation: "Removes 99.9% of impurities.",
      },
      {
        feature: "Smart Monitoring",
        explanation: "TDS and water level tracking.",
      },
      { feature: "Eco Friendly", explanation: "Energy-efficient design." },
    ],
  },

  power: {
    productName: "Smart Power Meter",
    mainImage: "/products/HILA0553.png",
    featuresImage: "/products/power-mter.png",
    intro:
      "The smart power Meter digitizes the energy system, laying the foundation for a cleaner and more efficient supply of power. Our Device offers valuable information that helps integrate energy-saving technology into buildings.",
    features: [
      {
        feature: "Multi-stage Filtration",
        explanation: "Removes 99.9% of impurities.",
      },
      {
        feature: "Smart Monitoring",
        explanation: "TDS and water level tracking.",
      },
      { feature: "Eco Friendly", explanation: "Energy-efficient design." },
    ],
  },
  water: {
    productName: "Smart Water Meter",
    mainImage: "/products/HILA0445.png",
    featuresImage: "/products/water-meter.png",
    intro:
      "An innovative water purification solution using UV and nano-filtration technologies.",
    features: [
      {
        feature: "Multi-stage Filtration",
        explanation: "Removes 99.9% of impurities.",
      },
      {
        feature: "Smart Monitoring",
        explanation: "TDS and water level tracking.",
      },
      { feature: "Eco Friendly", explanation: "Energy-efficient design." },
    ],
  },

  bundi: {
    productName: "Bundi Vehicle Tracking & Security ",
    mainImage: "/products/TRACKER-ENCLOSURE-BLACK-1.png",
    featuresImage: "/products/TRACKER-ENCLOSURE-BLACK-1.png",
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
