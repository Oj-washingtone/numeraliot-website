import React, { useState } from "react";
import "./header.css";
import MenuDropdown from "./MenuDropdown";

const navItems = [
  {
    name: "Products",
    hasDropdown: true,
    content: [
      {
        name: "Simba Speed Governor",
        description:
          "Reliable speed regulation for safer and compliant driving.",
        link: "/products/simba-speed-governor",
        icon: "/icons/SIMBA-SPEED-ICON.png",
      },

      {
        name: "Bundi Vehicle Tracking & Security",
        description: "Real-time tracking and protection for your vehicle.",
        link: "/products/bundi-vehicle-tracking-security",
        icon: "/icons/Bundi Tracking Icon.png",
      },
      {
        name: "Hewa speakers",
        description:
          "Compact, high-quality sound with dual pairing for a richer experience.",
        link: "/products/hewa-speakers",
        icon: "/icons/HEWA-ICON.png",
      },
      {
        name: "NIOT Smart Power Meter",
        description:
          "Track usage, share tokens, and manage power effortlessly.",
        link: "/products/niot-smart-power-meter",
        icon: "/icons/Power-Meter-ICON.png",
      },
      {
        name: "NIOT Smart Water Meter",
        description:
          " Monitor usage, detect leaks, and manage water efficiently.",
        link: "/products/niot-smart-water-meter",
        icon: "/icons/Water-Meter.png",
      },
      {
        name: "NIOT Smart Gas Meter",
        description:
          "Monitor usage, enhance safety, and manage gas efficiently.",
        link: "/products/niot-smart-gas-meter",
        icon: "/icons/Gas-Meter.png",
      },
      {
        name: "Transit tag",
        description: "Monitor your kids transportation from and to school",
        link: "/products/transit-tag",
        icon: "/icons/Transit-Tag-Icon.png",
      },
    ],
  },
  {
    name: "Solutions",
    hasDropdown: true,
    content: [
      {
        name: "Hardware Manufacturing",
        description:
          "Designing and producing high-quality IoT devices at scale.",
        link: "solutions/solution",
        icon: "/icons/Hardware-icon.png",
      },

      {
        name: "Fleet Telematics",
        description:
          "Real-time tracking, analytics, and optimization for smarter fleet management.",
        link: "solutions/solution",
        icon: "/icons/Fleet-Telematics Icon.png",
      },
      {
        name: "IoT Platforms",
        description:
          "Scalable, secure, and intelligent connectivity for all your devices.",
        link: "solutions/solution",
        icon: "/icons/IOT-PLATFORMS-ICON.png",
      },
      {
        name: "Infinity engine",
        description: "Infinity engine",
        link: "solutions/solution",
        icon: "/icons/Infinity-Icon.png",
      },
    ],
  },
  {
    name: "Company",
    hasDropdown: true,
    content: [
      {
        name: "Leadership",
        description: "Meet our leadership team",
        link: "#",
      },
      {
        name: "Awards & Recognitions",
        description: " Celebrating excellence and industry leadership.",
        link: "#",
      },
      {
        name: "Partners",
        description: "Meet Our partners",
        link: "#",
      },
      {
        name: "Careers",
        description: "Join our team and shape the future of IoT with us.",
        link: "#",
      },
      {
        name: "Press",
        description:
          "Latest news, updates, and media coverage about our innovations.",
        link: "#",
      },
      {
        name: "Events",
        description: "Join us in our upcoming events",
        link: "#",
      },
      {
        name: "FAQs",
        description:
          "Get answers to common questions about our products and services.",
        link: "#",
      },
    ],
  },
  { name: "Shop", hasDropdown: false, link: "#" },
  { name: "Blog", hasDropdown: false, link: "#" },
  { name: "FAQs", hasDropdown: false, link: "#" },
];

export default function Nav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ul className="nav-menu">
      {navItems.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
          onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
          className={item.hasDropdown ? "has-dropdown" : ""}
        >
          <a href={item.link || "#"} className="main-menu-link">
            {item.name}
          </a>
          {item.hasDropdown && activeDropdown === index && (
            <MenuDropdown>
              <div className="menu-dropdown-items-wrapper">
                <div className="row">
                  {item.content.map((subItem, subIndex) => (
                    <div key={subIndex} className="col-md-4">
                      <a href={subItem.link}>
                        <div className="menu-dropdown-item">
                          {subItem.icon && (
                            <div className="menu-item-icon">
                              <img src={subItem?.icon} />
                            </div>
                          )}

                          <div
                            className="menu-item-details"
                            style={{
                              width: subItem.icon
                                ? "calc(100% - 60px)"
                                : "100%",
                            }}
                          >
                            {subItem.name}
                            <p>{subItem.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </MenuDropdown>
          )}
        </li>
      ))}
    </ul>
  );
}
