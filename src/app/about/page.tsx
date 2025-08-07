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
      </section>
    </div>
  );
};

export default About;
