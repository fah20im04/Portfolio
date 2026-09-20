import { motion } from "framer-motion";

const animations = {
  // Fade
  fade: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },

  // Fade + movement
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeDown: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  fadeRight: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  // Slide
  slideUp: {
    hidden: {
      y: 80,
    },
    visible: {
      y: 0,
    },
  },

  slideDown: {
    hidden: {
      y: -80,
    },
    visible: {
      y: 0,
    },
  },

  slideLeft: {
    hidden: {
      x: -80,
    },
    visible: {
      x: 0,
    },
  },

  slideRight: {
    hidden: {
      x: 80,
    },
    visible: {
      x: 0,
    },
  },

  // Scale
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  scaleUp: {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  },

  scaleDown: {
    hidden: {
      opacity: 0,
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  // Rotate
  rotate: {
    hidden: {
      opacity: 0,
      rotate: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
    },
  },

  // Blur
  blur: {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  },

  // Zoom
  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  // Bounce
  bounce: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  },
};

export default function Motion({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
  ...props
}) {
  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}