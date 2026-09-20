import React from "react";
import { DiAngularSimple } from "react-icons/di";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";

const baseClasses =
  "group absolute right-0 top-0 h-12 w-12 hover:w-44 rounded-full flex items-center transition-all duration-300 ease-in-out overflow-hidden cursor-pointer shadow-lg";

const Navbar = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
      {/* HOME */}
      <div className="relative w-44 h-12">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive ? "bg-blue-500" : "bg-neutral-800 hover:bg-blue-500"
            }`
          }
        >
          <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-black text-2xl flex-shrink-0">
            <FaHome />
          </div>
          <span className="ml-5 text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            HOME
          </span>
        </NavLink>
      </div>

      {/* ABOUT */}
      <div className="relative w-44 h-12">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive ? "bg-blue-500" : "bg-neutral-800 hover:bg-blue-500"
            }`
          }
        >
          <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-black text-2xl flex-shrink-0">
            <DiAngularSimple />
          </div>
          <span className="ml-5 text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            ABOUT
          </span>
        </NavLink>
      </div>
      <div className="relative w-44 h-12">
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive ? "bg-blue-500" : "bg-neutral-800 hover:bg-blue-500"
            }`
          }
        >
          <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-black text-2xl flex-shrink-0">
            <GiSkills />
          </div>
          <span className="ml-5 text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            SKILLS
          </span>
        </NavLink>
      </div>

      {/* PROJECTS */}
      <div className="relative w-44 h-12">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive ? "bg-blue-500" : "bg-neutral-800 hover:bg-blue-500"
            }`
          }
        >
          <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-black text-2xl flex-shrink-0">
            <GrProjects />
          </div>
          <span className="ml-5 text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            PROJECTS
          </span>
        </NavLink>
      </div>

      {/* CONTACT */}
      <div className="relative w-44 h-12">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive ? "bg-blue-500" : "bg-neutral-800 hover:bg-blue-500"
            }`
          }
        >
          <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-black text-2xl flex-shrink-0">
            <IoMdContacts />
          </div>
          <span className="ml-5 text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            CONTACT
          </span>
        </NavLink>
      </div>

      {/* CHAT */}
      {/* <div className="relative w-44 h-12">
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `${baseClasses} ${
              isActive ? "bg-blue-500" : "bg-neutral-800 hover:bg-blue-500"
            }`
          }
        >
          <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-black text-2xl flex-shrink-0">
            <MdOutlineMessage />
          </div>
          <span className="ml-5 text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            CHAT
          </span>
        </NavLink>
      </div> */}
    </div>
  );
};

export default Navbar;
