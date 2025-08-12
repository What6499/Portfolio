import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="flex mt-6 lg:mt-0 flex-col-reverse lg:flex-row h-[calc(100vh-150px)] items-center container mx-auto px-4 py-6 md:py-12">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1  text-[#1B1B1B]/80  lg:mt-0"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-center lg:text-left">
          About Me
        </h1>
        <p className="mb-4 text-center lg:text-left text-black/70 text-base sm:text-lg font-semibold leading-relaxed">
          I'm a full stack developer. I got into programming because I enjoy
          solving problems and pushing myself to learn new things. It's
          satisfying to see how code can bring ideas to life.
        </p>
        <p className="text-base text-center lg:text-left sm:text-lg text-black/70 font-semibold leading-relaxed">
          One of my wishes is to visit Switzerland at least once — the scenery
          there looks amazing. I like taking on challenges, especially those
          that make me think differently or find creative solutions. Apart from
          coding, I like playing games on my computer.
        </p>
      </motion.div>

      {/* Vertical Divider */}
      <div className="w-64 h-0.5 my-6   lg:w-0.5 lg:h-56 bg-[#1B1B1B]/30 mx-0 lg:mx-8  md:block"></div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="flex-[0.4] w-full  max-w-xs md:max-w-md"
      >
        <img
          src="https://i.postimg.cc/dQgDz6SD/me.jpg"
          alt="Your portrait"
          className="rounded-lg  object-contain w-full h-auto max-h-[250px] lg:max-h-[450px]"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
