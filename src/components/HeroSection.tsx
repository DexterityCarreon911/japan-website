import React, { useState, useEffect } from 'react';
import { Search, BookOpen, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onBrowseLibrary: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onBrowseLibrary }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const suggestedSearches = [
    'samurai',
    'edo period',
    'japanese culture',
    'japanese literature',
    'tokugawa',
    'japanese festivals'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-charcoal to-black">
        <div className="absolute inset-0 opacity-20">
          {/* Mount Fuji silhouette effect */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-japanese-red/30 to-transparent"></div>
          <div className="absolute bottom-0 left-1/4 right-1/4 h-32 bg-gradient-to-t from-japanese-red/20 to-transparent rounded-t-full"></div>
          
          {/* Animated sakura petals effect */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sakura-pink rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-sakura-pink rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-sakura-pink rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-japanese-red rounded-full mb-6 pulse-red">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            The Japan Knowledge Library
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover books about Japan's history, culture, traditions, and knowledge.
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books about Japan..."
                className="w-full bg-gray-800/60 backdrop-blur-sm text-white px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-japanese-red text-lg border border-gray-700 focus:border-transparent transition-all duration-300 pl-14"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              type="submit"
              className="japan-gradient hover:shadow-xl text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </form>

        {/* Enhanced Suggested Searches */}
        <div className="mb-12">
          <p className="text-gray-400 mb-4 text-sm uppercase tracking-wide">Popular searches</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestedSearches.map((search, index) => (
              <button
                key={search}
                onClick={() => {
                  setSearchQuery(search);
                  onSearch(search);
                }}
                className="bg-gray-800/60 hover:bg-japanese-red/20 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-300 border border-gray-700 hover:border-japanese-red hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Browse Button */}
        <button
          onClick={onBrowseLibrary}
          className="japan-gradient hover:shadow-2xl text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3"
        >
          <BookOpen size={24} />
          Browse the Library
        </button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
