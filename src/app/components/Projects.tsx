"use client";
import { projects } from "@/content/project";
import { fadeInUp, staggerContainer } from "@/utils/animation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="py-10 container mx-auto max-w-7xl px-4">
      <motion.h2  {...fadeInUp} className="text-3xl font-bold text-center mb-10">
        Featured Projects
      </motion.h2>

      <motion.div variants={staggerContainer}
          initial="initial"
          animate="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <motion.h3 whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }} className="text-xl font-semibold mb-2">{project.title}</motion.h3>
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </motion.p>

            <motion.div  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                   whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }} className="flex gap-4 m-2">
              <motion.a
                href={project.githubLink}
                target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
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
    </section>
  );
};

export default Projects;
