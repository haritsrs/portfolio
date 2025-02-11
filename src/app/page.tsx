import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first web project",
      videoPlaceholder: true,
    },
    {
      title: "Project 2",
      description: "Description of your second web project",
      videoPlaceholder: true,
    },
    {
      title: "Project 3",
      description: "Description of your third web project",
      videoPlaceholder: true,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Harits R. Setiono</h1>
          <div className="space-x-6">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Harits Raharjo Setiono</h1>
          <p className="text-xl text-gray-600 mb-8">Web Developer & Designer</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-2 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/225" 
                    alt="Project video placeholder"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              I'm a web developer passionate about creating beautiful and functional websites.
              With expertise in modern web technologies including React, Next.js, and TypeScript,
              I focus on delivering high-quality web solutions that meet client needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:your.email@example.com" className="flex items-center text-blue-600 hover:text-blue-800">
              <Mail size={20} className="mr-2" />
              your.email@example.com
            </a>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Harits R. Setiono. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
