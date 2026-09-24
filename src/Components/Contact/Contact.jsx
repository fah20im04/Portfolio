import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpen } from "react-icons/fa";

import Motion from "../reusable/Motion";
import { contactInfo, socialLinks } from "../../data/Contact";
// --- Contact Info Item ---
const ContactInfoItem = ({ icon: Icon, title, details, index }) => {
  return (
    <Motion animation="fadeUp" delay={index * 0.12} duration={0.6}>
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="flex items-start space-x-6"
      >
        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          transition={{ duration: 0.2 }}
          className="
            flex-shrink-0
            w-12
            h-12
            rounded-full
            bg-blue-500
            flex
            items-center
            justify-center
            shadow-lg
            shadow-blue-500/30
          "
        >
          <Icon className="text-white text-xl" />
        </motion.div>

        {/* Text */}
        <div>
          <h4 className="text-lg font-bold uppercase text-white/70">{title}</h4>

          <p className="text-xl font-semibold text-white">{details}</p>
        </div>
      </motion.div>
    </Motion>
  );
};

// --- Social Media ---
const SocialMediaLinks = () => {
  return (
    <Motion animation="fadeUp" delay={0.4} duration={0.6}>
      <div className="flex space-x-4 pt-6">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <Motion
              key={index}
              animation="fadeUp"
              delay={0.4 + index * 0.1}
              className="
                w-10
                h-10
                rounded-full
                bg-gray-800
                border
                border-gray-700
                flex
                items-center
                justify-center
                text-white
                text-lg
                hover:bg-blue-500
                hover:border-blue-500
                transition
                duration-300
              "
            >
              <Icon />
            </Motion>
          );
        })}
      </div>
    </Motion>
  );
};

// --- Contact Form ---
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Form submitted (Visual Only). Integrate a backend service to make this fully functional.",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.input
          type="text"
          placeholder="YOUR NAME"
          required
          whileFocus={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            bg-gray-800
            p-4
            border
            border-gray-700
            rounded-lg
            text-white
            placeholder-gray-500
            focus:border-blue-500
            focus:outline-none
            transition
          "
        />

        <motion.input
          type="email"
          placeholder="YOUR EMAIL"
          required
          whileFocus={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            bg-gray-800
            p-4
            border
            border-gray-700
            rounded-lg
            text-white
            placeholder-gray-500
            focus:border-blue-500
            focus:outline-none
            transition
          "
        />
      </div>

      {/* Subject */}
      <motion.input
        type="text"
        placeholder="YOUR SUBJECT"
        required
        whileFocus={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          w-full
          bg-gray-800
          p-4
          border
          border-gray-700
          rounded-lg
          text-white
          placeholder-gray-500
          focus:border-blue-500
          focus:outline-none
          transition
        "
      />

      {/* Message */}
      <motion.textarea
        placeholder="YOUR MESSAGE"
        rows="6"
        required
        whileFocus={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          w-full
          bg-gray-800
          p-4
          border
          border-gray-700
          rounded-lg
          text-white
          placeholder-gray-500
          focus:border-blue-500
          focus:outline-none
          transition
          resize-none
        "
      />

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          flex
          items-center
          space-x-3
          px-8
          py-3
          rounded-full
          bg-blue-500
          hover:bg-blue-600
          transition
          duration-300
          font-semibold
          uppercase
          text-sm
          shadow-lg
          shadow-blue-500/50
        "
      >
        <span>Send Message</span>

        <motion.span
          whileHover={{
            x: 3,
          }}
        >
          <FaEnvelopeOpen className="text-lg" />
        </motion.span>
      </motion.button>
    </form>
  );
};

// --- Main Contact Component ---
const Contact = () => {
  return (
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-20">
      {/* ================= TITLE ================= */}
      <Motion
        animation="fadeUp"
        duration={0.7}
        className="relative text-center mb-16 pt-8"
      >
        {/* Background Title */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-8xl
            md:text-[10rem]
            font-extrabold
            text-white/5
            uppercase
            tracking-widest
            leading-none
          "
        >
          Contact
        </motion.h1>

        {/* Main Title */}
        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase flex items-center whitespace-nowrap">
            <span className="text-white">GET IN</span>

            <span className="text-blue-500 ml-3">TOUCH</span>
          </h2>
        </div>
      </Motion>

      {/* ================= CONTACT GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* ================= LEFT COLUMN ================= */}
        <Motion
          animation="fadeLeft"
          duration={0.7}
          className="lg:col-span-1 space-y-10"
        >
          <h3 className="text-3xl font-bold uppercase text-white tracking-wider mb-6">
            Don't Be Shy !
          </h3>

          <p className="text-white/80 leading-relaxed">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          {/* Contact Info */}
          <div className="space-y-6 pt-4">
            {contactInfo.map((item, index) => (
              <ContactInfoItem key={index} {...item} index={index} />
            ))}
          </div>

          {/* Social Links */}
          <SocialMediaLinks />
        </Motion>

        {/* ================= RIGHT COLUMN ================= */}
        <Motion
          animation="fadeRight"
          delay={0.15}
          duration={0.7}
          className="lg:col-span-2"
        >
          <ContactForm />
        </Motion>
      </div>

      {/* ================= FOOTER ================= */}
      <Motion animation="fadeUp" delay={0.2} duration={0.6}>
        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-red-500">
            This is not a real contact form. I will work on it latter.
          </p>

          <p className="text-sm text-white/50 mt-4">
            &copy; {new Date().getFullYear()} Fahim Dasik. All rights reserved.
          </p>
        </footer>
      </Motion>
    </section>
  );
};

export default Contact;
