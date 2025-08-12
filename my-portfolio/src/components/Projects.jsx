import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // make sure to import from "framer-motion"
import { Eye, ArrowRight } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container mx-auto p-6 rounded-lg">
      {/* Header Section */}
      <h2 className="text-5xl text-center font-bold mb-6 text-[#1B1B1B]">
        Projects
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="w-[90%] origin-left h-px bg-[#1B1B1B]/20 mx-auto mb-8"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <div className="bg-white/40  rounded-2xl shadow-md border border-[#e3d6b5] overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-t-2xl"></div>

                {/* View Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-[#1B1B1B]/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={24} className="text-[#FFF8E7]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#1B1B1B] group-hover:text-[#5a5a5a] transition-colors">
                  {project.name}
                </h3>

                <p className="text-[#5a5a5a] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#e3d6b5] text-[#1B1B1B] text-sm font-medium rounded-full border border-[#d1c1a6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => {
                    console.log(`Navigate to /projects/${project.id}`);
                  }}
                  className="w-full bg-[#1B1B1B] text-[#FFF8E7] py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#3d3d3d] transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  <span>View Details</span>
                  <ArrowRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-[#1B1B1B] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
