import { motion } from "motion/react";
import { Project } from "../../lib/projectsData";

interface ProjectCardProps {
  project: Project;
  id: string;
  key?: any;
}

export function ProjectCard({ project, id }: ProjectCardProps) {
  return (
    <motion.div
      id={`portfolio_project_card_wrapper_${project.id}`}
      className="project-card flex-shrink-0 overflow-hidden relative group cursor-pointer select-none"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          referrerPolicy="no-referrer"
          className="h-[220px] sm:h-[300px] md:h-[380px] w-auto object-contain rounded-2xl border border-gray-100/50 shadow-md transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/40"
        />
      )}
    </motion.div>
  );
}

