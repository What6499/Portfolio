import React from "react";

const Banner = () => {
  return (
    <section className="flex items-center max-w-6xl mx-auto p-6 md:p-12">
      {/* Left Text Content */}
      <div className="flex-1 pr-8 text-[#1B1B1B]">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="mb-4">
          I'm a full stack developer. I got into programming because I enjoy
          solving problems and pushing myself to learn new things. It's
          satisfying to see how code can bring ideas to life.
        </p>
        <p>
          One of my wishes is to visit Switzerland at least once — the scenery
          there looks amazing. <br />I like taking on challenges, especially
          those that make me think differently or find creative solutions.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] h-56 bg-[#1B1B1B]/30 mx-8 hidden md:block"></div>

      {/* Right Image */}
      <div className="flex-[.4]">
        <img
          src="https://i.postimg.cc/dQgDz6SD/me.jpg"
          alt="Your portrait"
          className="rounded-lg object-contain w-full h-[350px] md:h-[450px]"
        />
      </div>
    </section>
  );
};

export default Banner;
