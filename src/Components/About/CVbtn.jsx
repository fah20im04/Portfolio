import React, { useState } from "react";
import Motion from "../reusable/Motion";
import { FaDownload, FaTimes } from "react-icons/fa";

export const CVbtn = () => {
  const [showCV, setShowCV] = useState(false);

  const cvLink =
    "https://drive.google.com/file/d/1l8-2LWmKfuJDLo8kZDqtkWYAflrgkxdH/preview";

  return (
    <>
      <section>
        <Motion animation="fadeUp" delay={0.3} duration={0.6} className="w-fit">
          <button
            onClick={() => setShowCV(true)}
            className="
              relative
              mt-12 md:mt-0
              mx-auto md:mx-0
              flex
              items-center
              h-14
              w-74
              max-w-xs
              pr-4
              rounded-full
              bg-gray-900
              border-2
              border-blue-500
              overflow-hidden
              transition-all
              duration-300
              hover:shadow-lg
              hover:shadow-blue-500/50
              hover:scale-[1.03]
              active:scale-[0.97]
            "
          >
            {/* Text */}
            <span
              className="
                flex-grow
                text-lg
                font-bold
                text-white
                uppercase
                tracking-wider
                ml-6
              "
            >
              View My CV
            </span>

            {/* Icon */}
            <span
              className="
                absolute
                right-0
                h-full
                aspect-square
                rounded-full
                bg-blue-500
                flex
                items-center
                justify-center
                transition-transform
                duration-300
                hover:rotate-[-10deg]
              "
            >
              <FaDownload className="text-white text-xl" />
            </span>
          </button>
        </Motion>
      </section>

      {/* CV Modal */}
      {showCV && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
        >
          <Motion
            animation="scaleUp"
            duration={0.4}
            className="
              relative
              w-full
              max-w-5xl
              h-[90vh]
              bg-neutral-900
              rounded-xl
              overflow-hidden
              shadow-2xl
            "
          >
            {/* Modal Header */}
            <div
              className="
                h-14
                px-5
                flex
                items-center
                justify-between
                bg-gray-900
                border-b
                border-white/10
              "
            >
              <h2 className="text-white font-bold uppercase tracking-wider">
                My CV
              </h2>

              <div className="flex items-center gap-3">
                {/* Download */}
                <a
                  href={cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4
                    py-2
                    rounded-lg
                    bg-blue-500
                    text-white
                    text-sm
                    font-semibold
                    hover:bg-blue-600
                    transition
                  "
                >
                  Download
                </a>

                {/* Close */}
                <button
                  onClick={() => setShowCV(false)}
                  className="
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    bg-white/10
                    hover:bg-red-500
                    transition
                  "
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* CV Preview */}
            <iframe
              src={cvLink}
              title="Fahim Ahmed Ayon CV"
              className="w-full h-[calc(90vh-3.5rem)]"
            />
          </Motion>
        </div>
      )}
    </>
  );
};
