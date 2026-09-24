import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import MySkills from "../About/MySkills";
import ExperienceEducation from "../About/ExperienceEducation";

const RootLayout = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="w-full min-h-screen overflow-x-hidden">
        <section id="home" className="w-full">
          <Home />
        </section>

        <section id="about" className="w-full">
          <About />
        </section>

        <section id="skills" className="w-full">
          <MySkills />
        </section>

        <section id="experience" className="w-full">
          <ExperienceEducation />
        </section>

        <section id="projects" className="w-full">
          <Projects />
        </section>

        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
