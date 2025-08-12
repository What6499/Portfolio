import React from "react";
import { motion } from "motion/react";
import {
  Code,
  Globe,
  Server,
  CreditCard,
  Database,
  Palette,
  Layout,
  Flame,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Globe },
  { name: "Next.js", icon: Layout },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "Stripe Payment Integration", icon: CreditCard },
  { name: "Firebase", icon: Flame },
  { name: "Tailwind CSS", icon: Palette },
  { name: "CSS3", icon: Palette },
  { name: "MongoDB", icon: Database },
];
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,

    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      duration: 0.3,
    },
  },
};
const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-5xl font-bold text-[#1B1B1B] mb-6 text-center">
        Skills
      </h2>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-[90%] origin-left h-px bg-gray-900/30 mx-auto mb-8"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative cursor-default select-none"
              whileHover={{
                scale: 1.08,
                rotateY: 3,
                z: 10,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 via-gray-800 to-black opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 rounded-lg"></div>

              <div className="relative bg-[#1B1B1B] text-white px-5 py-4 rounded-lg shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>

                <div className="absolute top-1 right-2 w-1 h-1 bg-white/20 rounded-full group-hover:animate-ping"></div>

                <div className="relative z-10 flex items-center justify-center space-x-3">
                  <div className="flex-shrink-0">
                    <Icon
                      size={20}
                      className="text-white/80 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    />
                  </div>

                  <span className="font-medium text-center group-hover:tracking-wide transition-all duration-300">
                    {skill.name}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white/50 to-white/20 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
