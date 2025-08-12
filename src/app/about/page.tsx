"use client";
import { FaCode, FaLaptopCode, FaToolbox } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, fadeInDown, fadeInUp, staggerContainer } from "@/utils/animation";

const About = () => {
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <motion.h1  {...fadeInDown} className="text-3xl font-bold text-center mb-10">About Me</motion.h1>

      {/* bio section */}
      <motion.section  {...fadeInUp} className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
         I&apos;m SM Sumsuzzaman (SM Siam), a passionate Frontend Developer dedicated to crafting visually stunning and highly functional web applications. My programming journey began with a deep curiosity about web technologies, which led me to master HTML, CSS, JavaScript, and React.js. I specialize in building interactive, user-friendly, and responsive web interfaces.
        </p>
      </motion.section>

      {/* skill section */}
      <motion.section    {...fadeIn}
        transition={{ delay: 0.2 }} className="mb-16">
        <motion.h2  {...fadeInUp} className="section-title">Skills</motion.h2>
        <motion.div variants={staggerContainer}
          initial="initial"
          animate="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md ">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md ">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md ">
            <FaToolbox className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / Githud</li>
              <li>Postman </li>
              <li>Prettier</li>
              <li>Figma / Pixso</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Experience section */}

      {/* <motion.section  className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }} className="mb-16">
        <motion.h2  {...fadeInUp} className="section-title">Education</motion.h2>

        <notion.div   variants={staggerContainer}
          initial="initial"
          animate="animate" className="max-w-3xl mx-auto space-y-8">
          <motion.div  variants={fadeInUp}
            {...cardHoverSmall} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Senior Full Stack Developer
            </h3>
            <p className="text-primary mb-2">Company Name • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Led development of multiple web applications using React and
                Node.js
              </li>
              <li>
                Implemented CI/CD pipelines reducing deployment time by 50%
              </li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
          <motion.div  variants={fadeInUp}
            {...cardHoverSmall} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Previous Company • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>
                Built responsive user interfaces with modern JavaScript
                frameworks
              </li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </notion.div>
      </motion.section> */}

      {/* educational section */}
      <motion.section  {...fadeIn}
        transition={{ delay: 0.6 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">Education</motion.h2>

        <motion.div   variants={staggerContainer}
          initial="initial"
          animate="animate" className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-primary mb-2">
              Mirpur University College • 2020-2025
            </p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web
              development.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
