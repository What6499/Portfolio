import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="max-w-7xl mx-auto p-6 ">
      {/* Header Section */}

      <h2 className="text-5xl text-center font-bold mb-6 text-[#1B1B1B]">
        Projects
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* View Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={24} className="text-[#1B1B1B]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#1B1B1B] group-hover:text-gray-700 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => {
                    // Navigate to project details - you can replace with your routing logic
                    console.log(`Navigate to /projects/${project.id}`);
                  }}
                  className="w-full bg-[#1B1B1B] text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-300 transform group-hover:scale-[1.02] shadow-sm hover:shadow-md"
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

      {/* View All Projects Link */}
      <div className="text-center mt-16">
        <button className="inline-flex items-center space-x-2 bg-white border-2 border-[#1B1B1B] text-[#1B1B1B] px-8 py-4 rounded-xl font-semibold hover:bg-[#1B1B1B] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
          <span>View All Projects</span>
          <ExternalLink size={18} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
