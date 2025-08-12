"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animation";

const Hero = () => {
  return (
    <section className="py-10 container mx-auto max-w-7xl px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/siam.jpg"
            alt="Profile Photo"
            width={1000}
            height={1000}
            className="rounded-full mb-4 w-36 h-36 object-cover ring-2 ring-primary"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
          Hi, I&apos;m <motion.span  {...fadeIn}
              transition={{ delay: 0.8 }} className="text-primary"> SM Sumsuzzaman</motion.span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-8"
        >
          Frontend Developer | MERN Developer | Open Source Contributor
        </motion.p>

        <motion.div  {...fadeInUp}
            transition={{ delay: 0.5 }} className="flex justify-center space-x-4 mb-8">
          <motion.a
            href="https://github.com/siam114"
            target="_blank"
            rel="noopener noreferrer"
             whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sm-siam598"
            target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/sumsuzzaman.siam"
            target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook />
          </motion.a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-6 py-3 rounded-lg hover:bg-primary/70 transition-colors"
          >
            View Project
          </Link>

          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
