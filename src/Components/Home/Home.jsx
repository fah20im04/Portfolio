import React, { useState } from "react";
import fahim from "../../assets/fahim.png";
import { HomeIcon } from "lucide-react";
import Navbar from "./Navbar/Navbar";
import About from "../About/About.jsx";
const Home = () => {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <section className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
      {/* Yellow Accent Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 -z-0 clip-path-polygon" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 -z-0 clip-path-polygon-2" />
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl w-[280px] sm:w-[320px] md:w-[360px]">
            <img
              src={fahim}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight">
            -I'M Fahim Ahmed
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            MERN Stack Developer
          </h2>

          <p className="text-neutral-300 max-w-xl">
            I’m a passionate MERN Stack Developer focused on building clean,
            scalable and user-friendly web applications. I love turning ideas
            into real-world products that solve problems and create impact.
          </p>

          <button
            onClick={() => setOpenAbout(true)}
            className="group inline-flex items-center gap-4 bg-blue-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-400 transition"
          >
            More About Me
            <span className="w-10 h-10 rounded-full bg-black text-blue-500 flex items-center justify-center group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </div>
      </div>
      {/* Fixed Navigation */}
      <Navbar />
      {/* Custom clip paths */}
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .clip-path-polygon-2 {
          clip-path: polygon(0 100%, 100% 100%, 0 0);
        }
      `}</style>

      {/* About Modal */}
      {openAbout && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          {/* Modal Container */}
          <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:w-[90%] lg:w-[80%] bg-neutral-900 rounded-none md:rounded-2xl overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setOpenAbout(false)}
              className="fixed md:absolute top-4 right-4 z-50 text-white text-2xl hover:text-red-400 transition"
            >
              ✕
            </button>

            {/* IMPORTANT: wrapper */}
            <div className="w-full min-h-screen md:min-h-0">
              <About />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
