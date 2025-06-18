import React, { useState, useEffect } from "react";
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
        link: "/products/simba",
        icon: "/icons/SIMBA-SPEED-ICON.png",
      },
      {
        name: "Bundi Vehicle Tracking & Security",
        description: "Real-time tracking and protection for your vehicle.",
        link: "/products/bundi",
        icon: "/icons/Bundi Tracking Icon.png",
      },
      {
        name: "Hewa speakers",
        description:
          "Compact, high-quality sound with dual pairing for a richer experience.",
        link: "/products/hewa",
        icon: "/icons/HEWA-ICON.png",
      },
      {
        name: "NIOT Smart Power Meter",
        description:
          "Track usage, share tokens, and manage power effortlessly.",
        link: "/products/power",
        icon: "/icons/Power-Meter-ICON.png",
      },
      {
        name: "NIOT Smart Water Meter",
        description:
          "Monitor usage, detect leaks, and manage water efficiently.",
        link: "/products/water",
        icon: "/icons/Water-Meter.png",
      },
      {
        name: "NIOT Smart Gas Meter",
        description:
          "Monitor usage, enhance safety, and manage gas efficiently.",
        link: "/products/#",
        icon: "/icons/Gas-Meter.png",
      },
      {
        name: "Transit tag",
        description: "Monitor your kids transportation from and to school",
        link: "https://transittag.com/",
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
  { name: "Blog", hasDropdown: false, link: "#" },
];

export default function Nav() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <ul className="nav-menu">
      {navItems.map((item, index) => (
        <li
          key={index}
          onMouseEnter={
            !isMobile && item.hasDropdown
              ? () => setActiveDropdown(index)
              : undefined
          }
          onMouseLeave={
            !isMobile && item.hasDropdown
              ? () => setActiveDropdown(null)
              : undefined
          }
          className={item.hasDropdown ? "has-dropdown" : ""}
        >
          <a
            href={item.link || "#"}
            className="main-menu-link"
            onClick={(e) => {
              if (isMobile && item.hasDropdown) {
                e.preventDefault(); // prevent navigation
                toggleMobileDropdown(index);
              }
            }}
          >
            {item.name}
          </a>

          {/* Desktop dropdown */}
          {item.hasDropdown && activeDropdown === index && !isMobile && (
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

          {/* Mobile dropdown (simple text links) */}
          {item.hasDropdown && activeDropdown === index && isMobile && (
            <ul className="mobile-submenu">
              {item.content.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a href={subItem.link}>{subItem.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
