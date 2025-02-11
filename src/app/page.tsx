import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Code, Award, Briefcase, User } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "Project 1",
      description: "Description of your first web project",
      category: "web",
      videoPlaceholder: true,
      technologies: ["React", "Next.js", "TypeScript"]
    },
    {
      title: "Project 2",
      description: "Description of your second web project",
      category: "mobile",
      videoPlaceholder: true,
      technologies: ["React Native", "Firebase"]
    },
    {
      title: "Project 3",
      description: "Description of your third web project",
      category: "web",
      videoPlaceholder: true,
      technologies: ["Vue.js", "Node.js"]
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Mobile Development", level: 75 }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
      } shadow-lg`}>
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Harits R. Setiono
          </h1>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#skills" className="hover:text-purple-600">Skills</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`pt-24 pb-12 px-4 ${
        isDarkMode ? 'bg-gradient-to-r from-purple-900 to-gray-900' : 'bg-gradient-to-r from-purple-50 to-yellow-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Harits Raharjo Setiono
          </h1>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Web Developer & Designer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-2 hover:text-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-purple-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-purple-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-white' : 'text-gray-700'}>
                    {skill.name}
                  </span>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-yellow-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Projects
          </h2>
          
          {/* Project Filters */}
          <div className="flex justify-center mb-8 space-x-4">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-purple-900'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'web' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-purple-900'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveTab('mobile')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'mobile' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-purple-900'
              }`}
            >
              Mobile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/225" 
                    alt="Project video placeholder"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-sm rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className={`prose prose-lg mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>
              I'm a web developer passionate about creating beautiful and functional websites.
              With expertise in modern web technologies including React, Next.js, and TypeScript,
              I focus on delivering high-quality web solutions that meet client needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:your.email@example.com" className="flex items-center text-purple-600 hover:text-purple-800">
              <Mail size={20} className="mr-2" />
              your.email@example.com
            </a>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:text-purple-600">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-purple-600">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${
        isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-white'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Harits R. Setiono. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
