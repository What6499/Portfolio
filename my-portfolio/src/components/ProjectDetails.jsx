import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch("/projects.json");
        const projects = await res.json();
        const foundProject = projects.find((p) => p.id === id);
        setProject(foundProject || null);
      } catch (err) {
        console.error("Failed to fetch projects", err);
        setProject(null);
      }
    }

    fetchProject();
  }, [id]);

  if (!project)
    return (
      <span className="loading mx-auto flex mt-8 loading-bars loading-xl"></span>
    );

  return (
    <div className="py-4">
      <section className="container  lg:mt-8  mx-auto p-6 border border-gray-400/30 bg-white/40 rounded-lg  text-[#1B1B1B]">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-12">
          {/* Image Left */}
          <div className="lg:w-1/2 flex-shrink-0">
            <img
              src={project.image}
              alt={project.name}
              className="w-full rounded-lg object-cover max-h-[450px]"
            />
          </div>

          {/* Info Right */}
          <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

            <p className="mb-4 text-lg font-semibold">
              {project.briefDescription}
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
              <ul className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 bg-[#1B1B1B] text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
              <p>{project.challenge}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
              <p>{project.futurePlan}</p>
            </div>

            <div className="flex gap-4 mt-auto">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 bg-[#1B1B1B] text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Live Project <ExternalLink size={16} />
                </a>
              )}
              {project.githubClient && (
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 border border-[#1B1B1B] rounded-lg hover:bg-[#1B1B1B] hover:text-white transition"
                >
                  GitHub Repo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
