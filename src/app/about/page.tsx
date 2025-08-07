import { FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <h1 className="text-3xl font-bold text-center mb-10">About Me</h1>

      {/* bio section */}
      <section className="mb-16">
           <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </section>

      {/* skill section */}
      <section className="mb-16">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md ">
              <FaCode className="h-8 w-8 text-primary mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="text-secondary space-y-2">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>

             <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md ">
              <FaLaptopCode className="h-8 w-8 text-primary mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="text-secondary space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>

             <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md ">
              <FaLaptopCode className="h-8 w-8 text-primary mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
              <ul className="text-secondary space-y-2">
                <li>Git / Githud</li>
                <li>Postman </li>
                <li>Prettier</li>
                <li>Figma / Pixso</li>
              </ul>
            </div>
          </div>
      </section>
    </div>
  );
};

export default About;
