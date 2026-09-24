import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DiAngularSimple } from "react-icons/di";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";

const navItems = [
  {
    id: "home",
    label: "HOME",
    icon: FaHome,
  },
  {
    id: "about",
    label: "ABOUT",
    icon: DiAngularSimple,
  },
  {
    id: "skills",
    label: "SKILLS",
    icon: GiSkills,
  },
  {
    id: "projects",
    label: "PROJECTS",
    icon: GrProjects,
  },
  {
    id: "contact",
    label: "CONTACT",
    icon: IoMdContacts,
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Detect current section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <div key={item.id} className="relative w-44 h-12">
            {/* Water droplet active background */}
            {isActive && (
              <motion.div
                layoutId="activeDroplet"
                className="
                  absolute
                  right-0
                  top-0
                  h-12
                  w-12
                  rounded-full
                  bg-blue-500
                  z-0
                "
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                  mass: 0.8,
                }}
              />
            )}

            {/* Navbar button */}
            <button
              type="button"
              onClick={() => handleScroll(item.id)}
              className="
                group
                absolute
                right-0
                top-0
                h-12
                w-12
                hover:w-44
                rounded-full
                flex
                items-center
                transition-all
                duration-300
                ease-in-out
                overflow-hidden
                cursor-pointer
                shadow-lg
                z-10
              "
            >
              {/* Background */}
              <div
                className={`
                  absolute
                  inset-0
                  rounded-full
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "bg-transparent"
                      : "bg-neutral-800 group-hover:bg-blue-500"
                  }
                `}
              />

              {/* Icon */}
              <div
                className={`
                  relative
                  z-10
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  text-2xl
                  flex-shrink-0
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-black"
                      : "text-white group-hover:text-black"
                  }
                `}
              >
                <Icon />
              </div>

              {/* Text */}
              <span
                className="
                  relative
                  z-10
                  ml-5
                  text-black
                  font-bold
                  tracking-wide
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
              >
                {item.label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
