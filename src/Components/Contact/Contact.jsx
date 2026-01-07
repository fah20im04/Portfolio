import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaMobileAlt,
  // ADDED SOCIAL ICONS
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

// --- Hardcoded Contact Data ---
const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: "Beanibazar, Sylhet, Bangladesh",
  },
  {
    icon: FaEnvelopeOpen,
    title: "Email Me",
    details: "fa369383@gmail.com",
  },
  {
    icon: FaMobileAlt,
    title: "Call Me",
    details: "+880 1935841938",
  },
];

// --- Social Media Links Data ---
const socialLinks = [
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/fahim-ahmed-ayon/",
    title: "LinkedIn",
  },
  {
    icon: FaGithub,
    url: "https://github.com/fah20im04",
    title: "GitHub",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/fanion_04/",
    title: "Instagram",
  },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/fah20im04",
    title: "Facebook",
  },
];

// --- Sub-components ---

const ContactInfoItem = ({ icon: Icon, title, details }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
      <Icon className="text-white text-xl" />
    </div>
    <div>
      <h4 className="text-lg font-bold uppercase text-white/70">{title}</h4>
      <p className="text-xl font-semibold text-white">{details}</p>
    </div>
  </div>
);

// --- NEW Social Media Component ---
const SocialMediaLinks = () => (
  <div className="flex space-x-4 pt-6">
    {socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        title={link.title}
        className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white text-lg 
                           hover:bg-blue-500 hover:border-blue-500 transition duration-300"
      >
        <link.icon />
      </a>
    ))}
  </div>
);
// ---------------------------------

const ContactForm = () => {
  // NOTE: This form is frontend-only (visual) and requires backend setup for actual submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submitted (Visual Only). Integrate a backend service (e.g., Formspree, AWS Lambda) to make this fully functional."
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="YOUR NAME"
          required
          className="bg-gray-800 p-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
        />
        <input
          type="email"
          placeholder="YOUR EMAIL"
          required
          className="bg-gray-800 p-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
        />
      </div>
      <input
        type="text"
        placeholder="YOUR SUBJECT"
        required
        className="w-full bg-gray-800 p-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
      />
      <textarea
        placeholder="YOUR MESSAGE"
        rows="6"
        required
        className="w-full bg-gray-800 p-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"
      ></textarea>

      {/* Submit Button (Matching Download CV style) */}
      <button
        type="submit"
        className="flex items-center space-x-3 px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold uppercase text-sm shadow-lg shadow-blue-500/50"
      >
        <span>Send Message</span>
        <FaEnvelopeOpen className="text-lg" />
      </button>
    </form>
  );
};

// --- Main Contact Component ---

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-20">
      {/* Title section (Matching previous components) */}
      <header className="relative text-center mb-16 pt-8">
        <h1 className="text-8xl md:text-[10rem] font-extrabold text-white/5 uppercase tracking-widest leading-none">
          Contact
        </h1>
        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase flex items-center">
            <span className="text-white">GET IN</span>
            <span className="text-blue-500 ml-3">TOUCH</span>
          </h2>
        </div>
      </header>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Contact Information & Social Links */}
        <div className="lg:col-span-1 space-y-10">
          <h3 className="text-3xl font-bold uppercase text-white tracking-wider mb-6">
            Don't Be Shy !
          </h3>
          <p className="text-white/80 leading-relaxed">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          {/* Contact Info Items */}
          <div className="space-y-6 pt-4">
            {contactInfo.map((item, index) => (
              <ContactInfoItem key={index} {...item} />
            ))}
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <SocialMediaLinks />
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>

      {/* Footer / Copyright Placeholder */}
      <footer className="mt-20 border-t border-white/10 pt-8 text-center">
        <p className="text-sm text-red-500">
          This is not a real contact form. I will work on it latter.
        </p>
        <p className="text-sm text-white/50 mt-4">
          &copy; {new Date().getFullYear()} Fahim Dasik. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
