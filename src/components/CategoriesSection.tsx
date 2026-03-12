import React from 'react';
import { 
  History, 
  Sword, 
  Users, 
  Calendar, 
  BookOpen, 
  Building, 
  Palette, 
  Building2,
  Utensils,
  Coffee,
  ArrowRight
} from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface CategoriesSectionProps {
  onCategorySelect: (category: string) => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onCategorySelect }) => {
  const categories: Category[] = [
    // History Categories
    {
      id: 'history',
      title: 'Japanese History',
      description: 'Explore the rich historical legacy of Japan from ancient times to modern era.',
      icon: <History size={32} />,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'samurai',
      title: 'Samurai Era',
      description: 'Discover the warrior class and their code of honor that shaped Japanese culture.',
      icon: <Sword size={32} />,
      color: 'from-red-600 to-red-800'
    },
    {
      id: 'edo',
      title: 'Edo Period',
      description: 'Journey through the Tokugawa shogunate and feudal Japan\'s golden age.',
      icon: <Building size={32} />,
      color: 'from-amber-600 to-amber-800'
    },
    {
      id: 'meiji',
      title: 'Meiji Restoration',
      description: 'Witness Japan\'s rapid modernization and transformation into a world power.',
      icon: <Building2 size={32} />,
      color: 'from-purple-600 to-purple-800'
    },
    
    // Culture Categories
    {
      id: 'culture',
      title: 'Culture & Traditions',
      description: 'Learn about Japanese customs, traditions, and cultural practices.',
      icon: <Users size={32} />,
      color: 'from-pink-600 to-pink-800'
    },
    {
      id: 'festivals',
      title: 'Festivals',
      description: 'Experience the vibrant celebrations and seasonal festivals of Japan.',
      icon: <Calendar size={32} />,
      color: 'from-rose-600 to-rose-800'
    },
    {
      id: 'ceremonies',
      title: 'Tea Ceremony',
      description: 'Discover the art and philosophy of the Japanese tea ceremony.',
      icon: <Coffee size={32} />,
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'religion',
      title: 'Religion & Philosophy',
      description: 'Explore Shinto, Buddhism, and Japanese spiritual traditions.',
      icon: <Building size={32} />,
      color: 'from-indigo-600 to-indigo-800'
    },
    
    // Food Categories
    {
      id: 'food',
      title: 'Japanese Cuisine',
      description: 'Master the art of Japanese cooking and culinary traditions.',
      icon: <Utensils size={32} />,
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: 'sushi',
      title: 'Sushi & Sashimi',
      description: 'Learn the techniques and traditions behind Japanese sushi making.',
      icon: <Utensils size={32} />,
      color: 'from-red-600 to-red-800'
    },
    {
      id: 'ramen',
      title: 'Ramen & Noodles',
      description: 'Explore the world of Japanese noodles and soup culture.',
      icon: <Utensils size={32} />,
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 'tea',
      title: 'Tea Culture',
      description: 'Discover Japanese tea traditions and the art of matcha.',
      icon: <Coffee size={32} />,
      color: 'from-green-600 to-green-800'
    },
    
    // Arts & Literature
    {
      id: 'literature',
      title: 'Literature',
      description: 'Dive into classical and contemporary Japanese literary works.',
      icon: <BookOpen size={32} />,
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      id: 'art',
      title: 'Art & Design',
      description: 'Discover Japanese artistic expressions from ukiyo-e to modern art.',
      icon: <Palette size={32} />,
      color: 'from-cyan-600 to-cyan-800'
    },
    {
      id: 'theater',
      title: 'Theater & Performance',
      description: 'Experience kabuki, noh, and traditional Japanese performing arts.',
      icon: <Calendar size={32} />,
      color: 'from-violet-600 to-violet-800'
    },
    {
      id: 'gardens',
      title: 'Gardens & Architecture',
      description: 'Explore Japanese garden design and traditional architecture.',
      icon: <Building size={32} />,
      color: 'from-teal-600 to-teal-800'
    },
    
    // Modern Categories
    {
      id: 'modern',
      title: 'Modern Japan',
      description: 'Understand contemporary Japanese society, technology, and culture.',
      icon: <Building2 size={32} />,
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'anime',
      title: 'Anime & Manga',
      description: 'Discover the cultural impact of Japanese animation and comics.',
      icon: <Palette size={32} />,
      color: 'from-pink-600 to-pink-800'
    },
    {
      id: 'business',
      title: 'Business & Technology',
      description: 'Learn about Japanese innovation and business culture.',
      icon: <Building2 size={32} />,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'urban',
      title: 'Urban Life',
      description: 'Experience modern Tokyo and contemporary Japanese lifestyle.',
      icon: <Building2 size={32} />,
      color: 'from-slate-600 to-slate-800'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-japanese-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-sakura-pink rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            Explore Japanese Knowledge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Browse through 20 comprehensive categories covering Japanese history, food, culture, and modern society. Discover books on everything from ancient samurai traditions to contemporary anime culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="group bg-dark-navy p-6 rounded-xl border border-gray-800 hover:border-japanese-red transition-all duration-500 card-hover fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-japanese-red transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {category.description}
                </p>
                <div className="flex items-center text-japanese-red opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
