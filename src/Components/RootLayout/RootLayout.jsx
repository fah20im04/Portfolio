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
    <div className="relative min-h-screen">
      <Navbar />

      <main className="min-h-screen">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <MySkills />
        </section>

        <section id="experience">
          <ExperienceEducation />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
