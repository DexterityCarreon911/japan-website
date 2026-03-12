import React from 'react';
import { BookOpen, Users, Target, Award, Github, Mail, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const teamMembers = [
    {
      name: "[Student Name 1]",
      role: "Frontend Developer",
      description: "Specialized in React, TypeScript, and UI/UX design"
    },
    {
      name: "[Student Name 2]",
      role: "Backend Integration",
      description: "Focused on API integration and data management"
    },
    {
      name: "[Student Name 3]",
      role: "Content Curation",
      description: "Responsible for content organization and categorization"
    },
    {
      name: "[Student Name 4]",
      role: "Project Management",
      description: "Coordinated project development and documentation"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Vite", icon: "⚡" },
    { name: "Google Books API", icon: "📚" },
    { name: "Lucide Icons", icon: "✨" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-japanese-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-sakura-pink rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-japanese-red rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            About The Japan Knowledge Library
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A digital library system dedicated to exploring books about Japan's history, culture, and traditions.
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-charcoal p-8 rounded-xl border border-gray-800 fade-in">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-japanese-red mr-3" />
                <h3 className="text-2xl font-bold text-white">Project Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To create an accessible and comprehensive digital library that makes knowledge about Japanese culture, 
                history, and traditions available to everyone through modern web technology.
              </p>
            </div>

            <div className="bg-charcoal p-8 rounded-xl border border-gray-800 fade-in">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-japanese-red mr-3" />
                <h3 className="text-2xl font-bold text-white">Academic Purpose</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Developed as a portfolio project for BS Information Technology, showcasing modern web development 
                practices, API integration, and responsive design principles.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-charcoal p-8 rounded-xl border border-gray-800 fade-in">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-japanese-red mr-3" />
                <h3 className="text-2xl font-bold text-white">Features</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-japanese-red mr-2">•</span>
                  Search and browse Japanese-related books
                </li>
                <li className="flex items-start">
                  <span className="text-japanese-red mr-2">•</span>
                  Categorized content organization
                </li>
                <li className="flex items-start">
                  <span className="text-japanese-red mr-2">•</span>
                  Detailed book information and previews
                </li>
                <li className="flex items-start">
                  <span className="text-japanese-red mr-2">•</span>
                  Responsive and accessible design
                </li>
                <li className="flex items-start">
                  <span className="text-japanese-red mr-2">•</span>
                  Real-time API integration
                </li>
              </ul>
            </div>

            <div className="bg-charcoal p-8 rounded-xl border border-gray-800 fade-in">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-japanese-red mr-3" />
                <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <p className="text-gray-300 text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-charcoal p-6 rounded-xl border border-gray-800 hover:border-japanese-red transition-all duration-300 card-hover fade-in"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-japanese-red to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">{member.name}</h3>
                <p className="text-japanese-red text-sm text-center mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-gradient-to-r from-japanese-red to-gray-800 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Academic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <p className="font-semibold mb-2">Course</p>
              <p>BS Information Technology</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Subject</p>
              <p>PPOP (Portfolio Project)</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Academic Year</p>
              <p>2024-2025</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <button className="bg-gray-800 hover:bg-japanese-red text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </button>
            <button className="bg-gray-800 hover:bg-japanese-red text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </button>
            <button className="bg-gray-800 hover:bg-japanese-red text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
              <Globe size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
