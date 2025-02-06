import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <div className="text-center">
          <Image
            src="/profile.jpg" // Replace with your profile image
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="mt-4 text-4xl font-bold">John Doe</h1>
          <p className="mt-2 text-xl text-gray-400">Full Stack Developer</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
            I am a passionate full-stack developer with experience in building web applications using modern technologies like Next.js, React, and Tailwind CSS. I love solving problems and creating user-friendly interfaces.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="mt-2 text-gray-400">A web application built with Next.js and Tailwind CSS.</p>
              <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="mt-2 text-gray-400">An e-commerce platform using React and Node.js.</p>
              <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            {/* Project Card 3 */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="mt-2 text-gray-400">A mobile app built with React Native.</p>
              <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          <form className="mt-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;