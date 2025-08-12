import React from "react";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Stripe Payment Integration",
  "Firebase",
  "Tailwind CSS",
  "CSS3",
  "MongoDB",
];

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-8 text-[#1B1B1B]">Skills</h2>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            variants={itemVariants}
            className="bg-[#1B1B1B] text-white px-5 py-3 rounded-lg shadow-sm cursor-default select-none text-center font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
