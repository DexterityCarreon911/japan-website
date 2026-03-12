import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Japan Knowledge Library
            </h3>
            <p className="text-gray-300 mb-2">
              <strong>Subject:</strong> PPOP
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Course:</strong> BS Information Technology
            </p>
            <p className="text-gray-300">
              A digital library system that explores books about Japan's history and culture.
            </p>
          </div>

          {/* Student Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Team Members</h4>
            <div className="space-y-2 text-gray-300">
              <p>[Student Name 1]</p>
              <p>[Student Name 2]</p>
              <p>[Student Name 3]</p>
              <p>[Student Name 4]</p>
            </div>
          </div>

          {/* School Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Academic Information</h4>
            <div className="space-y-2 text-gray-300">
              <p><strong>School:</strong> [University Name]</p>
              <p><strong>Department:</strong> Information Technology</p>
              <p><strong>Academic Year:</strong> 2024-2025</p>
              <p><strong>Project Type:</strong> Academic Portfolio</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 The Japan Knowledge Library. Educational Project for BS Information Technology.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS. Data sourced from Google Books API.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
