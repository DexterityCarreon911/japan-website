import React, { useState, useEffect } from 'react';
import { Search, Menu, X, BookOpen } from 'lucide-react';

interface NavigationProps {
  onSearch: (query: string) => void;
  onNavigate: (view: 'home' | 'library' | 'categories' | 'about') => void;
  currentView: 'home' | 'library' | 'categories' | 'about';
}

const Navigation: React.FC<NavigationProps> = ({ onSearch, onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleNavClick = (view: 'home' | 'library' | 'categories' | 'about') => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', view: 'home' as const },
    { name: 'Library', view: 'library' as const },
    { name: 'Categories', view: 'categories' as const },
    { name: 'About', view: 'about' as const }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-navy/95 backdrop-blur-lg border-b border-gray-800 shadow-lg' 
        : 'bg-dark-navy/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
            >
              <div className="p-2 bg-japanese-red rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Japan Knowledge Library
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.view)}
                className={`text-gray-300 hover:text-white relative group py-2 transition-all duration-200 ${
                  currentView === item.view ? 'text-japanese-red' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-japanese-red transition-all duration-300 ${
                  currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search books..."
                  className="bg-gray-800/50 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-japanese-red w-64 border border-gray-700 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <button
                type="submit"
                className="bg-japanese-red hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-200 ml-2 hover:scale-105 active:scale-95"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-dark-navy/95 backdrop-blur-lg border-t border-gray-800 px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentView === item.view 
                    ? 'text-japanese-red bg-gray-800/50' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-3 py-2">
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search books..."
                    className="w-full bg-gray-800/50 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-japanese-red border border-gray-700 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
                <button
                  type="submit"
                  className="bg-japanese-red hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
