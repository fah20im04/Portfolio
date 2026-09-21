import travelease from "../assets/travelease.png";
import hero from "../assets/hero.png";
import civicconnect from "../assets/civic.png";
import toytopia from "../assets/toytopia.png";
import biponik from "../assets/biponik.jpeg";
import uparzo from "../assets/uparzo.jpeg";

export const projectItems = [
  {
    id: 101,
    category: "Production",
    title: "HotelMania",
    imagePlaceholder: biponik,
    featured: true,
    status: "Live",
    livelink: "https://biponiq.com/",
    description:
      "A production hotel booking platform with property management, authentication, booking functionality and an admin dashboard.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind", "JWT"],
    gitrepo: "",
  },

  {
    id: 102,
    category: "Production",
    title: "Upazo",
    imagePlaceholder: uparzo,
    featured: true,
    status: "Live",
    livelink: "https://uparzo.com/",
    description:
      "A production e-commerce platform with product management, subscriptions, dashboards and authentication.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    gitrepo: "",
  },
  
  // OTHER PROJECTS

  {
    id: 1,
    category: "Car Rental",
    title: "Travelease",
    imagePlaceholder: travelease,
    featured: false,
    status: "Personal Project",
    livelink: "https://lighthearted-madeleine-ec839c.netlify.app/",
    description:
      "A full-featured car rental web app with authentication, booking system and admin panel.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
    gitrepo: "https://github.com/fah20im04/TravelEase",
  },

  {
    id: 2,
    category: "React JS",
    title: "Website Concept",
    imagePlaceholder: hero,
    featured: false,
    status: "Personal Project",
    livelink:
      "https://heroappfahim-dasik-7da5e8.netlify.app/",
    description:
      "Modern hero section design with animations and responsive layout.",
    tech: ["React", "Tailwind", "daisyUI", "firebase"],
    gitrepo: "https://github.com/fah20im04/Hero-App",
  },

  {
    id: 3,
    category: "MERN STACK",
    title: "Social Civic Connect",
    imagePlaceholder: civicconnect,
    featured: false,
    status: "Personal Project",
    livelink:
      "https://civicconnects-fahim-86f63a.netlify.app/",
    description:
      "A civic issue reporting platform with user roles and real-time updates.",
    tech: ["MERN", "JWT", "Stripe"],
    gitrepo: "https://github.com/fah20im04/Civic-Connect",
  },

  {
    id: 4,
    category: "Toy Store",
    title: "Toytopia Collection",
    imagePlaceholder: toytopia,
    featured: false,
    status: "Personal Project",
    livelink:
      "https://toytopiafahim-rabanadas-5e221e.netlify.app/",
    description:
      "E-commerce toy store with cart, filters and payment integration.",
    tech: ["React", "Firebase", "Stripe", "MongoDB"],
    gitrepo: "",
  },
];