import React from "react";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <section className="flex h-[calc(100vh-150px)] items-center max-w-7xl mx-auto p-6 md:p-12">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 pr-8 text-[#1B1B1B]/80"
      >
        <h1 className="text-4xl font-semibold mb-4">About Me</h1>
        <p className="mb-4 text-black/60 text-xl font-semibold">
          I'm a full stack developer. I got into programming because I enjoy
          solving problems and pushing myself to learn new things. It's
          satisfying to see how code can bring ideas to life.
        </p>
        <p className="text-xl text-black/60 font-semibold">
          One of my wishes is to visit Switzerland at least once — the scenery
          there looks amazing. I like taking on challenges, especially those
          that make me think differently or find creative solutions.
        </p>
      </motion.div>

      {/* Vertical Divider */}
      <div className="w-[2px] h-56 bg-[#1B1B1B]/30 mx-8 hidden md:block"></div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="flex-[.4]"
      >
        <img
          src="https://i.postimg.cc/dQgDz6SD/me.jpg"
          alt="Your portrait"
          className="rounded-lg object-contain w-full h-[350px] md:h-[450px]"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
