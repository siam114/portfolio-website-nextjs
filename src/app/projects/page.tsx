'use client'

import { projects } from "@/content/project";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { staggerContainer } from "@/utils/animation";

const Projects = () => {
  return (
    <div className="container mx-auto max-w-7xl py-2 md:py-10">
      <motion.h1    initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="text-3xl font-bold text-center mb-4">Projects</motion.h1>
      <motion.p  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-secondary  text-center mb-10 sm:mb-16">
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </motion.p>

       <motion.div    variants={staggerContainer}
        initial="initial"
        animate="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
                >
                  <motion.div whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }} className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
      
                  <motion.h3  whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }} className="text-xl font-semibold mb-2">{project.title}</motion.h3>
                  <motion.p  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </motion.p>
      
                  <motion.div  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <motion.span   whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
      
                  <motion.div  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }} className="flex gap-4 m-2">
                    <motion.a
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                      <FaGithub className="w-5 h-5" /> <span>Code</span>
                    </motion.a>
                    <motion.a
                     rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
                    </motion.a>
                  </motion.div>
                </article>
              ))}
            </motion.div>
    </div>
  );
};
export default Projects;
