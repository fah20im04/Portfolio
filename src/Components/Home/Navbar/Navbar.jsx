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
    <div
      className="
        fixed
        z-50
        flex
        items-center
        justify-center

        bottom-4
        left-1/2
        -translate-x-1/2
        w-[calc(100%-2rem)]
        max-w-md
        gap-2
        rounded-full
        bg-neutral-900/95
        p-2
        shadow-2xl
        backdrop-blur-md

        sm:bottom-5
        sm:w-auto
        sm:max-w-none
        sm:gap-3

        md:right-6
        md:top-1/2
        md:bottom-auto
        md:left-auto
        md:w-auto
        md:-translate-y-1/2
        md:translate-x-0
        md:flex-col
        md:gap-5
        md:rounded-none
        md:bg-transparent
        md:p-0
        md:shadow-none
        md:backdrop-blur-none
      "
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <div
            key={item.id}
            className="
              relative
              h-11
              w-full
              sm:h-12
              sm:w-12
              md:h-12
              md:w-44
            "
          >
            {/* Water droplet active background */}
            {isActive && (
              <motion.div
                layoutId="activeDroplet"
                className="
                  absolute
                  inset-0
                  h-11
                  w-full
                  rounded-full
                  bg-blue-500
                  sm:h-12
                  sm:w-12
                  md:right-0
                  md:left-auto
                  md:h-12
                  md:w-12
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
              aria-label={`Go to ${item.label.toLowerCase()} section`}
              className="
                group
                absolute
                inset-0
                h-11
                w-full
                rounded-full
                flex
                items-center
                justify-center
                overflow-hidden
                cursor-pointer
                shadow-lg
                transition-all
                duration-300
                ease-in-out
                sm:h-12
                sm:w-12
                md:right-0
                md:left-auto
                md:h-12
                md:w-12
                md:justify-start
                md:hover:w-44
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
                  flex
                  h-11
                  w-11
                  flex-shrink-0
                  items-center
                  justify-center
                  text-xl
                  transition-colors
                  duration-300
                  sm:h-12
                  sm:w-12
                  sm:text-2xl
                  ${
                    isActive
                      ? "text-black"
                      : "text-white group-hover:text-black"
                  }
                `}
              >
                <Icon />
              </div>

              {/* Text - hidden on mobile, shown on desktop hover */}
              <span
                className="
                  relative
                  z-10
                  hidden
                  ml-5
                  text-black
                  font-bold
                  tracking-wide
                  whitespace-nowrap
                  opacity-0
                  transition-all
                  duration-300
                  md:block
                  md:group-hover:opacity-100
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
