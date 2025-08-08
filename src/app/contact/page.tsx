import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="container mx-auto max-w-7xl py-2 md:py-10">
      <h1 className="text-3xl font-bold text-center mb-16">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* contact info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:smsiam987@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  smsiam987@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+8801783030598"
                  className="text-secondary hover:text-primary"
                >
                  +8801783030598
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkedAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p
                  className="text-secondary hover:text-primary"
                >
                    Mirpur, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
